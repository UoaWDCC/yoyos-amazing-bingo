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
import { Pokeball } from "@/components/ui/pokeball/Pokeball";
import useChallengeQuery from "@/queries/mockChallengeQuery";

export interface ChallengeDrawerProps {
  id: number;
}

const ChallengeDrawer = (props: ChallengeDrawerProps) => {
  const { data: challenge } = useChallengeQuery(props.id);

  if (!challenge) return null;

  return (
    <DrawerContent>
      <DrawerHeader>
        {/* required for screen reader */}
        <DialogTitle hidden>{challenge.title}</DialogTitle>
        <div className="flex w-full justify-center gap-2">
          <Pill>{challenge.id}</Pill>
          <Pill>{challenge.title}</Pill>
        </div>
        <DrawerDescription>{challenge.description}</DrawerDescription>
      </DrawerHeader>
      <div className="flex w-full justify-center">
        <Pokeball variant="master" size="fixed" className="shadow-2xl" />
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

const MemoChallengeDrawer = memo(ChallengeDrawer);

export { MemoChallengeDrawer as ChallengeDrawer };
