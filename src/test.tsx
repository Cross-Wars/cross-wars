import React, { useRef, useCallback, useState, useEffect } from "react"
import { crossBoard1 } from "./crossWord"
import { getGuess } from "./store/data"
import store from "./store"

import Crossword, { CrosswordImperative } from "@jaredreisinger/react-crossword"
import io from "socket.io-client"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "./store"

const socket = io("http://localhost:9000")


console.log(Crossword)

export default function MyPage() {
  socket.on("connect", () => {
    console.log("connected to server")
    socket.on("crosswar", (payload) => {
      store.dispatch(getGuess(payload.row, payload.col, payload.char))
    })
    socket.on('newWord', payload => {
      if (payload.direction === 'across') {
        const start = [crossBoard1.across[payload.number].row, crossBoard1.across[payload.number].col];
        for (let i = 0; i < payload.answer.length; i++) {
          crossword.current?.setGuess(start[0], start[1], payload.answer[i])
          start[1]++;
        }
      } else {
        const start = [crossBoard1.down[payload.number].row, crossBoard1.down[payload.number].col];
        for (let i = 0; i < payload.answer.length; i++) {
          crossword.current?.setGuess(start[0], start[1], payload.answer[i])
          start[0]++;
        }
      }
    })
  })
  const guess = useSelector((state: RootState) => state.dataReducer)
  console.log(guess)

  const crossword = useRef<CrosswordImperative>(null)
  // crossword.current?.setGuess(0, 0, "X")

  // crossword.current?.setGuess(0, 3, "X")
  // crossword.current?.setGuess(4, 4, "z")

  useEffect(() => {
    if (guess === "") {
      return
    }
    let arr = guess.split(" ")

    const [row, col, char] = arr
    crossword.current?.setGuess(+row, +col, char)
  }, [guess])

  // const onCellChange = (row: number, col: number, char: string) => {
  //   socket.emit("guess", { row, col, char })
  //   console.log(row, col, char)
  // }

  const onCorrect = (direction: string, number: string, answer: string) => {
      socket.emit('correctWord', {direction, number, answer})
      // for (let i = 0; i < answer.length; i++) {
      //   crossword.current?.setGuess(start[0], start[1], answer[i])
      //   start[1]++;
      // }
  }

  return (
    <Crossword
      // onCellChange={onCellChange}
      ref={crossword}
      onCorrect = {onCorrect}
      data={crossBoard1}
      // useStorage={false}
    />
  )
}
