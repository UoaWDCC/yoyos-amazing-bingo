"use server";

import "server-only";

import { auth } from "@/actions/auth";
import { Board } from "@/models/Board";
import { getBoardByTeamId } from "@/services/team";

export async function getBoard(): Promise<Board> {
  const { teamId } = await auth();

  if (!teamId) {
    throw new Error("Team ID is required");
  }

  return await getBoardByTeamId(teamId);
}
