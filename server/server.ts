const app = require("express")

const server = require("http").createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
})
io.on("connection", (socket) => {
  console.log("what is socket:" + socket)
  console.log("connected")

  socket.on("crosswar", (payload) => {
    console.log(payload.name)
    io.emit("crosswar", payload)
  })
})
server.listen(9000, () => {
  console.log("connected localhost 9000")
})
