import {calcWinState, BoardState} from "./calcWinState";

test("Returns correct state if board is a draw", () => {
  const board: BoardState = [
    "X",
    "X",
    "O",
    "O",
    "O",
    "X",
    "X",
    "O",
    "O"
  ]

  expect(calcWinState(board)).toEqual({state: "draw"})
})

test("Returns correct state if game is ongoing", () => {
  const board: BoardState = [
    "X",
    "X",
    "O",
    "O",
    "",
    "X",
    "X",
    "O",
    "O"
  ]

  expect(calcWinState(board)).toEqual({ state: 'not finished' })
})

test("Returns correct state if player X has won on a row", () => {
  const board: BoardState = [
    "",
    "",
    "",
    "",
    "",
    "",
    "X",
    "X",
    "X"
  ]

  expect(calcWinState(board)).toEqual({ state: 'won', winner: "X" })
})

test("Returns correct state if player X has won on a column", () => {
  const board: BoardState = [
    "",
    "",
    "X",
    "",
    "",
    "X",
    "",
    "",
    "X"
  ]

  expect(calcWinState(board)).toEqual({ state: 'won', winner: "X" })
})

test("Returns correct state if player X has won on a diagonal", () => {
  const board: BoardState = [
    "X",
    "",
    "",
    "",
    "X",
    "",
    "",
    "",
    "X"
  ]

  expect(calcWinState(board)).toEqual({ state: 'won', winner: "X" })
})