const GET_GUESS = "GET_GUESS"

export const getGuess = (row: number, col: number, char: string) => {
  return {
    type: GET_GUESS,
    row,
    col,
    char,
  }
}

interface action {
  type: string
  row: number
  col: number
  char: string
}

export const dataReducer = (state: string = "", action: action) => {
  switch (action.type) {
    case GET_GUESS:
      return `${action.row} ${action.col} ${action.char}`
    default:
      return state
  }
}
