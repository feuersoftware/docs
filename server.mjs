import { existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join } from 'node:path'
import handler from 'serve-handler'

const host = process.env.HOST || '0.0.0.0'
const parsedPort = Number.parseInt(process.env.PORT || '3000', 10)
const port = Number.isNaN(parsedPort) ? 3000 : parsedPort
const publicDirectory = join(process.cwd(), 'public')

const resolvePrerenderedPath = (pathname) => {
    if (pathname === '/') {
        return '/index.html'
    }

    if (extname(pathname) !== '') {
        return pathname
    }

    const relativePath = pathname.replace(/^\/+|\/+$/g, '')
    const htmlPath = join(publicDirectory, `${relativePath}.html`)
    const nestedIndexPath = join(publicDirectory, relativePath, 'index.html')

    if (existsSync(htmlPath)) {
        return `${pathname}.html`
    }

    if (existsSync(nestedIndexPath)) {
        return `${pathname}/index.html`
    }

    return null
}

createServer((request, response) => {
    if (request.method === 'GET' || request.method === 'HEAD') {
        const url = new URL(request.url || '/', 'http://localhost')
        const resolvedPath = resolvePrerenderedPath(url.pathname)

        if (resolvedPath) {
            request.url = `${resolvedPath}${url.search}`
        }
    }

    return handler(request, response, {
        public: 'public',
        cleanUrls: false
    })
}).listen(port, host)
