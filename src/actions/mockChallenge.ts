"use server";

import { ChallangeDTO } from "@/models/Challenge";

export async function getChallange(id: number): Promise<ChallangeDTO> {
  console.log(id);

  const data: ChallangeDTO = {
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
