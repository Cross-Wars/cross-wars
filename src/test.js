import React from "react"
import { crossBoard1 } from "./crossWord"

import Crossword from "@jaredreisinger/react-crossword"
import io from "socket.io-client"

const socket = io("http://localhost:9000")
// console.log(crossBoard1)
console.log(Crossword)
//console.log(Crossword.defaultProps?.onCorrect)
// console.log(Crossword.propTypes?.onCrosswordCorrect)

export default function MyPage() {
  Crossword.defaultProps.onCellChange = (row, column, character) => {
    socket.emit("letters", { row, column, character })
    console.log(row, column, character)
  }
  // crossBoard1.setGuess(4, 5, "y")

  Crossword.defaultProps.onAnswerComplete = (
    direction,
    number,
    correct,
    answer
  ) => {
    if (correct) {
      socket.emit("crosswar", { direction, number, answer })
      //console.log(direction, number, answer)
    } else {
      console.log("Incorrect")
    }
  }
  const crossword = <Crossword data={crossBoard1} />

  socket.io.on("letters", (payload) => {
    crossword.setGuess(payload.row, payload.column, payload.character)
  })
  //socket.emit("crosswar", { name: "dipti" })
  return crossword
}
