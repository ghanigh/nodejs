const http = require('http')

const server = http.createServer((req, res) => {
    res.end("Hello Word")
})

server.listen(3000, () => {
    console.log("Ghani MANSEUR")
})