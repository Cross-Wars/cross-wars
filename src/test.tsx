import React from "react"
import { crossBoard1 } from "./crossWord"

import Crossword from "@jaredreisinger/react-crossword"

// console.log(crossBoard1)
console.log(Crossword)
console.log(Crossword.defaultProps?.onCorrect)
console.log(Crossword.propTypes?.onCrosswordCorrect)

export default function MyPage() {
  //console.log(Crossword.propTypes?.onCorrect("across", "1", "POOH"))
  return <Crossword data={crossBoard1} />
}
