"use server";

import { parseZod } from "@/lib/zod";
import {
  GameStatus,
  gameStatusSchema,
  setGameStatus,
} from "@/models/GameStatus";
import { sendInvalidationCode } from "@/revalidation/sendInvalidationCode";

import "server-only";

import env from "@/lib/env";

import { auth } from "./authActions";

/**
 * Updates the current game status.
 */
export async function updateGameStatusAction(
  newStatus: GameStatus,
): Promise<void> {
  const { teamId } = await auth();
  if (teamId !== env.ADMIN_ID) {
    throw new Error("Unauthorized: Only admins can update game status.");
  }

  const newStatusParsed = parseZod(
    gameStatusSchema,
    newStatus,
    "actions/updateGameStatusAction.ts",
  );
  setGameStatus(newStatusParsed);

  sendInvalidationCode("getGameStatus");
}
