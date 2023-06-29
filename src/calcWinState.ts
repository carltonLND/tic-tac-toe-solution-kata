// Stackblitz example:https://stackblitz.com/edit/tic-tac-toe-scaffolded-zqdqvt?file=src%2FcalcWinState.ts 

type Player = 'X' | 'O';
/** The state of any one position on the board.  "" means no mark has been played there, yet. */
type PosState = Player | '';

type PosStateLine = [PosState, PosState, PosState]

/** The state of a 3x3 tic-tac-toe board.
 *
 * Positions are listed as in left-to-right reading order
 * (left to right, top to bottom).
 */
export type BoardState = [
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState
];

export type WinState =
  | { state: 'draw' }
  | { state: 'not finished' }
  | { state: 'won'; winner: Player };


/*
  Board Index:
-----------------
    0 | 1 | 2
    3 | 4 | 5
    6 | 7 | 8
*/

export function calcWinState(board: BoardState): WinState {
  const playerXResult = checkPlayerWin(board, "X")
  if (playerXResult !== undefined) {
    return {state: "won", winner: playerXResult}
  }

  const playerOResult = checkPlayerWin(board, "O")
  if (playerOResult !== undefined) {
    return {state: "won", winner: playerOResult}
  }

  if (board.includes("")) {
    return { state: 'not finished' }
  }
  
  return { state: 'draw' };
}

function isWin(row: PosStateLine , player: Player): boolean {
  return row.every((pos) => pos === player)
}

function checkRows(board: BoardState, player: Player): Player | undefined {
  let [idx1, idx2, idx3] = [0, 1, 2];

  for (let i = 0; i < 3; i++) {
    const row = [board[idx1], board[idx2], board[idx3]] as PosStateLine 
    if (isWin(row, player)) {
      return player;
    }

    idx1 += 3
    idx2 += 3
    idx3 += 3
  }
}

function checkColumn(board: BoardState, player: Player): Player | undefined {
  let [idx1, idx2, idx3] = [0, 3, 6];

  for (let i = 0; i < 3; i++) {
    const column = [board[idx1], board[idx2], board[idx3]] as PosStateLine 
    if (isWin(column, player)) {
      return player;
    }

    idx1++
    idx2++
    idx3++
  }
}

function checkDiagonal(board: BoardState, player: Player): Player | undefined {
  const diagonalOne = [board[0], board[4], board[8]] as PosStateLine 
  const diagonalTwo = [board[2], board[4], board[6]] as PosStateLine

  if (isWin(diagonalOne, player) || isWin(diagonalTwo, player)) {
    return player;
  }
}

function checkPlayerWin(board: BoardState, player: Player): Player | undefined {
  if (checkRows(board, player) !== undefined) {
    return player
  }

  if (checkColumn(board, player) !== undefined) {
    return player
  }

  if (checkDiagonal(board, player) !== undefined) {
    return player
  }
}