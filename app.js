const http = require('http')

let counter = 0

// Increment the counter every second
setInterval(() => {
  counter += 1
}, 1000)

const server = http.createServer((req, res) => {
  if (req.url === '/metrics') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`# HELP myapp_requests_total Total number of requests to myapp
# TYPE myapp_requests_total counter
myapp_requests_total ${counter}`)
  } else {
    res.writeHead(404)
    res.end()
  }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
