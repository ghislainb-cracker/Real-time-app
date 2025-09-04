const ws = require('ws')
const server = new ws.Server({ port: '3000' })

server.on("connection", (socket) => {
    console.log("Client connected on the server successfully✅");
    socket.on("message", (msg) => {
        console.log("received message is:", msg.toString())
        
    })
})