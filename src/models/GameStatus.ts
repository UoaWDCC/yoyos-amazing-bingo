import { z } from "zod";

export const gameStatusSchema = z.enum(["running", "yoyover", "finished"]);
export type GameStatus = z.infer<typeof gameStatusSchema>;

// No need to persist this transient data
let gameStatus: GameStatus = "running";

export function getGameStatus(): GameStatus {
  return gameStatus;
}

export function setGameStatus(newStatus: GameStatus): void {
  gameStatus = newStatus;
}
