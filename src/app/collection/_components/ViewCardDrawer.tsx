"use client";

import React from "react";
import Image from "next/image";

import CardDisplay from "@/app/collect/_components/CardDisplay";
import CardProvider from "@/app/collect/_components/Provider";
import { cards } from "@/assets/pokecards";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Pill } from "@/components/ui/pill";
import { Pokeball } from "@/components/ui/pokeball";
import { pokeDifficulty } from "@/components/ui/pokeball/Pokeball";
import { Square } from "@/models/Board";

import { UnknownCard } from "./Card";

const ViewCardDrawer = (activity: Square) => {
  const pokeIndex = parseInt(activity.activity.id);
  const cardImage = cards.images[pokeIndex];

  if (cardImage === undefined) {
    return <UnknownCard />;
  }

  return (
    <Drawer>
      <CardProvider value={{ title: "None", imageIndex: pokeIndex }}>
        <DrawerTrigger>
          <div className="bg-foreground relative grid aspect-[1/1.4] w-full place-items-center rounded">
            <Image
              fill
              src={cards.images[pokeIndex].src}
              alt={activity.activity.name}
            />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="bg-pill-blue absolute bottom-0 left-1/2 -z-10 size-64 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"></div>
          <DrawerHeader>
            <DrawerTitle hidden>{activity.activity.name}</DrawerTitle>
            <div className="flex w-full justify-center">
              <Pill variant="brand">{activity.activity.name} </Pill>
            </div>
          </DrawerHeader>
          <div className="h-120">
            <CardDisplay delay={0} />
          </div>
          <DrawerFooter>
            <div className="flex gap-4">
              <Pokeball
                variant={pokeDifficulty[activity.points]}
                className="size-12 shadow-xl"
              />
              <DrawerClose asChild>
                <Button>CLOSE</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </CardProvider>
    </Drawer>
  );
};

export default ViewCardDrawer;
