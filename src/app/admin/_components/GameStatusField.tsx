"use client";

import { ChangeEvent } from "react";

import useGetGameStatus from "@/queries/useGetGameStatus";
import mutateGameStatus from "@/queries/mutateGameStatus";
import { parseZod } from './../../../lib/zod';
import { gameStatusSchema } from "@/models/GameStatus";

export function GameStatusField() {
  const { data: currentGameStatus } = useGetGameStatus();

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = parseZod(gameStatusSchema, event.target.value);
    mutateGameStatus(selectedStatus);
  };

  if (!currentGameStatus) return <p>Loading...</p>;

  return (
    <div>
      <p>Game Status</p>
      <select onChange={handleStatusChange} value={currentGameStatus}>
        <option value="running">Running</option>
        <option value="yoyover">Yoyover</option>
        <option value="finished">Finished</option>
      </select>
    </div>
  );
}
