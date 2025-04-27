"use client";

import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Pokeball } from "@/components/ui/pokeball";
import { pokeDifficulty } from "@/components/ui/pokeball/Pokeball";
import useGetBoard from "@/queries/useGetBoard";

import { ActivityDrawer } from "./ActivityDrawer";

export function BingoBoard() {
  const { data: squares } = useGetBoard();

  if (!squares) return null;

  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {squares.map((square) => (
        <Drawer key={`${square.activity.x}-${square.activity.y}`}>
          <DrawerTrigger>
            <Pokeball
              variant={pokeDifficulty[square.points - 1]}
              className="cursor-pointer"
            />
          </DrawerTrigger>
          <ActivityDrawer square={square} />
        </Drawer>
      ))}
    </div>
  );
}
