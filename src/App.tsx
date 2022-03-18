import React from "react"

import "./App.css"
import MyPage from "./test"
import io from "socket.io-client"

const socket = io("http://localhost:9000")

function App() {
  socket.emit("crosswar", { name: "dipti" })

  return (
    <div style={{ height: 200, width: 400 }}>
      <MyPage />
    </div>
  )
}

export default App
