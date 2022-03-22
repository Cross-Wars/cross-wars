//const { db } = require("./db")
const PORT = process.env.PORT || 8080
const app = require("./app")
// const seed = require("../script/seed")

const init = async () => {
  try {
    // if (process.env.SEED === "true") {
    //   await seed()
    // } else {
    //   await db.sync()
    // }
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () =>
      console.log(`Mixing it up on port ${PORT}`)
    )
    const io = require("socket.io")(server, {
      cors: {
        origin: "*",
      },
    })

    let player = []

    io.on("connection", (socket) => {
      console.log("what is socket:" + socket.id)
      console.log("connected")
      if (!player.includes(socket.id)) {
        player.push(socket.id)
      }

      console.log(player)

      // socket.on("crosswar", (payload) => {
      //   console.log(payload.direction, payload.number, payload.answer)

      //   io.emit("crosswar", payload)
      // })

      //   socket.on("player", (payload) => {

      //     io.emit("player", payload)
      //   })

      socket.on("guess", (payload) => {
        // console.log(payload.row, payload.col, payload.char)

        io.emit("crosswar", payload)
      })
    })
  } catch (ex) {
    console.log(ex)
  }
}

init()
