import { z } from "zod";

export const gameStatusSchema = z.enum(["running", "yoyover", "finished"]);
export type GameStatus = z.infer<typeof gameStatusSchema>;

// No need to persist this transient data
export const gameStatus: GameStatus = "running";
