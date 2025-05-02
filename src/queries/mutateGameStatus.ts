import { mutate } from "swr";

import { updateGameStatusAction } from "@/actions/updateGameStatusAction";
import { GameStatus } from "@/models/GameStatus";

/** @see updateGameStatusAction */
export default async function mutateGameStatus(gameStatus: GameStatus) {
  await updateGameStatusAction(gameStatus);

  // Invalidate the cache for the game status
  mutate(`getGameStatus`);
}
