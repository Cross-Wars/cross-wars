import React, { useRef, useCallback, useState, useEffect } from "react"
import { crossBoard1 } from "./crossWord"
import { getGuess } from "./store/data"
import store from "./store"

import Crossword, { CrosswordImperative } from "@jaredreisinger/react-crossword"
import io from "socket.io-client"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "./store"

const socket = io("http://localhost:9000")

socket.on("connect", () => {
  console.log("connected to server")
  socket.on("crosswar", (payload) => {
    store.dispatch(getGuess(payload.row, payload.col, payload.char))
  })
})

console.log(Crossword)

export default function MyPage() {
  const guess = useSelector((state: RootState) => state.dataReducer)
  console.log(guess)

  const crossword = useRef<CrosswordImperative>(null)
  crossword.current?.setGuess(0, 0, "X")

  crossword.current?.setGuess(0, 3, "X")
  crossword.current?.setGuess(4, 4, "z")

  useEffect(() => {
    if (guess === "") {
      return
    }
    let arr = guess.split(" ")
    // "5 6 char"
    // ["5" , "6" , "char"]

    const [row, col, char] = arr
    crossword.current?.setGuess(+row, +col, char)
  }, [guess])

  // const fillAllAnswers = useCallback((event) => {
  //   crossword.current?.fillAllAnswers()
  // }, [])

  // console.log(fillAllAnswers)

  // console.log(crossword)

  const onCellChange = (row: number, col: number, char: string) => {
    socket.emit("guess", { row, col, char })
    console.log(row, col, char)
    //addMessage(`onCellChange: "${row}", "${col}", "${char}"`)
  }

  // Crossword.defaultProps.onCellChange = (row, column, character) => {
  //   socket.emit("letters", { row, column, character })
  //   console.log(row, column, character)
  // }
  // // crossBoard1.setGuess(4, 5, "y")

  // Crossword.defaultProps.onAnswerComplete = (
  //   direction,
  //   number,
  //   correct,
  //   answer
  // ) => {
  //   if (correct) {
  //     socket.emit("crosswar", { direction, number, answer })
  //     //console.log(direction, number, answer)
  //   } else {
  //     console.log("Incorrect")
  //   }
  // }
  //const crossword = <Crossword data={crossBoard1} />

  // socket.io.on("letters", (payload) => {
  //   crossword.setGuess(payload.row, payload.column, payload.character)
  // })
  //socket.emit("crosswar", { name: "dipti" })
  return (
    <Crossword
      onCellChange={onCellChange}
      ref={crossword}
      data={crossBoard1}
      // useStorage={false}
    />
  )
}
