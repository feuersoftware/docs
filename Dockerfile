# syntax=docker/dockerfile:1

# ---- Build & prerender stage -------------------------------------------------
# Node 24.x (including 24.21.0, what the node:24 tag currently resolves to) has a
# bug that makes Nitro's prerender step silently terminate the build process
# before .output/server is written, which is why the container failed with
# "Cannot find module '/app/.output/server/index.mjs'". Node 26 is not affected.
# The full Debian image (glibc, build tooling) also keeps native addons such as
# better-sqlite3 and sharp on the well-trodden prebuilt-binary path.
FROM node:26 AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies (cached unless package.json changes)
RUN npm ci

# Copy source files
COPY . .

# Build arguments for Nuxt Studio OAuth (required at build time)
# Placed after npm ci to not invalidate dependency cache
ARG STUDIO_GITHUB_CLIENT_ID
ARG STUDIO_GITHUB_CLIENT_SECRET
ENV STUDIO_GITHUB_CLIENT_ID=$STUDIO_GITHUB_CLIENT_ID
ENV STUDIO_GITHUB_CLIENT_SECRET=$STUDIO_GITHUB_CLIENT_SECRET

# Build the application (SSR server + prerendered pages)
RUN npm run build

# The Node 24 failure mode was a build that "succeeded" without a server bundle.
# Turn that into a hard failure so it can never be deployed silently again.
RUN test -f .output/server/index.mjs

# ---- Runtime stage -----------------------------------------------------------
# Only Nitro's self-contained output is shipped. The image must match the
# builder's Node major and libc (glibc), because .output/server/node_modules
# contains native addons compiled against them.
FROM node:26-slim AS runner

WORKDIR /app

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 --ingroup nodejs nuxtjs

# Copy built application
COPY --from=builder --chown=nuxtjs:nodejs /app/.output /app/.output

USER nuxtjs

# Expose port
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Start the application
CMD ["node", ".output/server/index.mjs"]
