"use server";

import { gameStatus, GameStatus } from "@/models/gameStatus";

import "server-only";

/**
 * Fetches the current game status.
 */
export async function getGameStatusAction(): Promise<GameStatus> {
  return gameStatus;
}
