import { createServer } from 'node:http'
import handler from 'serve-handler'

const host = process.env.HOST || '0.0.0.0'
const parsedPort = Number.parseInt(process.env.PORT || '3000', 10)
const port = Number.isNaN(parsedPort) ? 3000 : parsedPort

createServer((request, response) =>
    handler(request, response, {
        public: 'public',
        cleanUrls: true
    })
).listen(port, host)
