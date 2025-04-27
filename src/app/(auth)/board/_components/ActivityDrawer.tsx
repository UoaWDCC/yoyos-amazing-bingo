"use client";

import { memo } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Pill } from "@/components/ui/pill";
import { Pokeball, pokeDifficulty } from "@/components/ui/pokeball/Pokeball";
import { Square } from "@/models/Square";

export interface ActivityDrawerProps {
  square: Square;
}

const ActivityDrawer = ({ square }: ActivityDrawerProps) => {
  return (
    <DrawerContent>
      <DrawerHeader>
        {/* required for screen reader */}
        <DialogTitle hidden>{square.activity.name || ""}</DialogTitle>
        <div className="flex w-full justify-center gap-2">
          <Pill>{square.activity.id}</Pill>
          <Pill>{square.activity.name}</Pill>
        </div>
        <DrawerDescription>{square.activity.description}</DrawerDescription>
      </DrawerHeader>
      <div className="flex w-full justify-center">
        <Pokeball
          variant={pokeDifficulty[square.points - 1]}
          size="fixed"
          className="shadow-2xl"
        />
      </div>
      <DrawerFooter>
        <Button variant="outline">PIN</Button>
        <DrawerClose asChild>
          <Button>CLOSE</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};

const MemoActivityDrawer = memo(ActivityDrawer);

export { MemoActivityDrawer as ActivityDrawer };
