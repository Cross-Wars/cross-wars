import React from "react"
import { crossBoard1 } from "./crossWord"

import Crossword from "@jaredreisinger/react-crossword"

export default function MyPage() {
  return <Crossword data={crossBoard1} />
}
