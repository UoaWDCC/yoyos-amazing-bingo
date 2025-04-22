import { DialogTitle } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer/drawer";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import { Pokeball } from "@/components/ui/pokeball/Pokeball";

export default function Home() {
  return (
    <NormalLayout>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2>Yoyo&apos;s Bingo</h2>
          <h1>Board</h1>
        </div>
        <p>TEAM NAME</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex w-full justify-center gap-2">
          <Pill>48pts</Pill>
        </div>
        <div className="grid grid-cols-4 gap-4 sm:px-8">
          {[...Array(16)].map((_, i) => (
            <Pokeball key={i} variant="master" />
          ))}
        </div>
        <div className="flex w-full justify-center gap-2">
          <Pill>4</Pill>
          <Pill>Webster&apos;s groceries</Pill>
        </div>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            {/* required for screen reader */}
            <DialogTitle hidden></DialogTitle>
            <div className="flex w-full justify-center gap-2">
              <Pill>4</Pill>
              <Pill>Webster&apos;s groceries</Pill>
            </div>
            <DrawerDescription>
              Webster goes to the supermarket and buys 10 tomatoes.
              Unfortunately, on the way back home, all but 8 get ruined. How
              many tomatoes are left in a good condition?
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="outline">PIN</Button>
            <DrawerClose asChild>
              <Button>CLOSE</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </NormalLayout>
  );
}
