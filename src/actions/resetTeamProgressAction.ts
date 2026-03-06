"use server";

import "server-only";

import { auth } from "@/actions/authActions";
import { sendInvalidationCode } from "@/revalidation/sendInvalidationCode";
import { resetTeamProgress } from "@/services/resetTeamProgressService";

export async function resetTeamProgressAction(
  teamIds?: string[],
): Promise<void> {
  const { teamId } = await auth();

  if (teamId !== "admin") {
    throw new Error("Unauthorized");
  }

  await resetTeamProgress(teamIds);

  sendInvalidationCode("getAllTeams");
}
