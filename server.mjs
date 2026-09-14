import { existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join } from 'node:path'
import handler from 'serve-handler'

const host = process.env.HOST || '0.0.0.0'
const parsedPort = Number.parseInt(process.env.PORT || '3000', 10)
const port = Number.isNaN(parsedPort) ? 3000 : parsedPort
const publicDirectory = join(process.cwd(), 'public')

const shouldServeIndex = (pathname) => {
    if (pathname === '/' || extname(pathname) !== '') {
        return false
    }

    const relativePath = pathname.replace(/^\/+|\/+$/g, '')

    return !existsSync(join(publicDirectory, relativePath))
        && !existsSync(join(publicDirectory, `${relativePath}.html`))
}

createServer((request, response) => {
    const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)

    if (shouldServeIndex(url.pathname)) {
        request.url = '/'
    }

    return handler(request, response, {
        public: 'public',
        cleanUrls: true
    })
}).listen(port, host)
