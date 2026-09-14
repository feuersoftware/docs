#!/usr/bin/env bash
# Smoke-tests a built docs image the way production would run it: checks the build
# artifacts, starts the container, and probes the routes that matter. Guards against
# the failure modes seen in production - an image without a Nitro server bundle, a
# build where prerendering silently did not run, and a Studio /admin route that is
# no longer served.
#
# Usage: scripts/smoke-test.sh <image>
set -euo pipefail

IMAGE="${1:?usage: $0 <image>}"
PORT="${SMOKE_PORT:-3300}"
NAME="docs-smoke-$$"
BASE="http://localhost:${PORT}"
STARTED=""

on_exit() {
    local code=$?
    if [ -n "$STARTED" ]; then
        if [ "$code" -ne 0 ]; then
            echo "--- container logs ---"
            docker logs "$NAME" 2>&1 | tail -40
        fi
        docker rm -f "$NAME" >/dev/null 2>&1 || true
    fi
}
trap on_exit EXIT

fail() {
    echo "FAIL: $*" >&2
    exit 1
}

echo "==> build artifacts in $IMAGE"
docker run --rm "$IMAGE" test -f .output/server/index.mjs \
    || fail "no Nitro server bundle (.output/server/index.mjs) in image"
docker run --rm "$IMAGE" test -f .output/public/connect.html \
    || fail "prerendered pages missing (.output/public/connect.html); prerendering did not run"
echo "ok   server bundle and prerendered pages present"

echo "==> starting container"
docker run -d --name "$NAME" -p "${PORT}:3000" \
    -e STUDIO_GITHUB_CLIENT_ID=smoke-test \
    -e STUDIO_GITHUB_CLIENT_SECRET=smoke-test \
    "$IMAGE" >/dev/null
STARTED=1

ready=""
for _ in $(seq 1 30); do
    if curl -fs -o /dev/null "$BASE/"; then
        ready=1
        break
    fi
    sleep 2
done
[ -n "$ready" ] || fail "server did not become ready within 60s"

expect_status() {
    local path="$1" want="$2" got
    got=$(curl -s -o /dev/null -w '%{http_code}' "$BASE$path")
    [ "$got" = "$want" ] || fail "GET $path -> $got (expected $want)"
    echo "ok   GET $path -> $got"
}

echo "==> routes"
expect_status / 200
expect_status /connect 200
expect_status /blog 200
expect_status /sitemap.xml 200
expect_status /this-route-does-not-exist 404

title=$(curl -s "$BASE/connect" | grep -o '<title>[^<]*</title>' || true)
[ -n "$title" ] || fail "GET /connect returned no HTML document"
echo "ok   GET /connect returns an HTML document ($title)"

location=$(curl -s -o /dev/null -w '%{redirect_url}' "$BASE/admin")
case "$location" in
    */__nuxt_studio/auth/github*) echo "ok   GET /admin -> Studio GitHub login" ;;
    *) fail "GET /admin did not redirect to the Studio login (got '${location:-no redirect}')" ;;
esac

echo "PASS: $IMAGE"
