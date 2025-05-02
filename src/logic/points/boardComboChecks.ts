import { Board } from "@/models/Board";

export function isRowComplete(board: Board, rowIndex: number): boolean {
  // Assume 4x4 board as a single 0-15 array
  const rowStart = rowIndex * 4;
  const rowEnd = rowStart + 4;
  const row = board.slice(rowStart, rowEnd);
  return row.every((teamActivity) => teamActivity.isCompleted);
}

export function isColumnComplete(board: Board, colIndex: number): boolean {
  // Assume 4x4 board as a single 0-15 array
  const column = [
    board[colIndex],
    board[colIndex + 4],
    board[colIndex + 8],
    board[colIndex + 12],
  ];
  return column.every((teamActivity) => teamActivity.isCompleted);
}

export function isDiagonalComplete(
  board: Board,
  direction: "backslash" | "forwardslash",
): boolean {
  const backSlash = [board[0], board[5], board[10], board[15]]; // Direction: \
  const forwardSlash = [board[3], board[6], board[9], board[12]]; // Direction: /
  const diagonal = direction === "backslash" ? backSlash : forwardSlash;
  return diagonal.every((teamActivity) => teamActivity.isCompleted);
}
