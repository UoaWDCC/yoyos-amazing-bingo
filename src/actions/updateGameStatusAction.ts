"use server";

import { parseZod } from "@/lib/zod";
import {
  GameStatus,
  gameStatusSchema,
  setGameStatus,
} from "@/models/GameStatus";

import "server-only";

/**
 * Updates the current game status.
 */
export async function updateGameStatusAction(
  newStatus: GameStatus,
): Promise<void> {
  const newStatusParsed = parseZod(
    gameStatusSchema,
    newStatus,
    "actions/updateGameStatusAction.ts",
  );
  setGameStatus(newStatusParsed);
}
