const app = require("express")

const server = require("http").createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
})
io.on("connection", (socket) => {
  console.log("what is socket:" + socket.id)
  console.log("connected")

  // socket.on("guess", (payload) => {
  //   console.log(payload.row, payload.col, payload.char)

  //   io.emit("crosswar", payload)
  // })
  socket.on('correctWord', (payload) => {
    io.emit('newWord', payload)
  })
})
server.listen(9000, () => {
  console.log("connected localhost 9000")
})
