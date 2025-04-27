"use server";
import { ChallengeDTO } from "@/models/Challenge";
import "server-only";

export async function getChallenge(id: number): Promise<ChallengeDTO> {
  const data: ChallengeDTO = {
    id: id,
    title: `Challenge ${id}`,
    description: `Challenge ${id} description`,
    difficulty: (["normal", "great", "ultra", "master"] as const)[id % 4],
  };

  return data;
}

//Webster&apos;s groceries
/*
Webster goes to the supermarket and buys 10 tomatoes. Unfortunately,
on the way back home, all but 8 get ruined. How many tomatoes are left
in a good condition?
*/
