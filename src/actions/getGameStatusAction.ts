"use server";

import { GameStatus, getGameStatus } from "@/models/GameStatus";

import "server-only";

/**
 * Fetches the current game status.
 */
export async function getGameStatusAction(): Promise<GameStatus> {
  return getGameStatus();
}