import "@/components/ui/drawer";

import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import { Pokeball } from "@/components/ui/pokeball/Pokeball";

import { ChallengeDrawer } from "./_components/DescriptionDrawer";

export default function Home() {
  const variant = ["master", "great", "ultra", "normal"] as const;
  return (
    <NormalLayout title="Board">
      <div className="flex flex-col gap-8">
        <div className="flex w-full justify-center gap-2">
          <Pill>48pts</Pill>
        </div>
        <div className="grid grid-cols-4 gap-2 px-8">
          {[...Array(16)].map((_, i) => (
            <Drawer key={i}>
              <DrawerTrigger>
                <Pokeball
                  variant={variant[Math.floor(Math.random() * 4)]}
                  className="cursor-pointer"
                />
              </DrawerTrigger>
              <ChallengeDrawer id={i + 1} />
            </Drawer>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2">
          <Pill>4</Pill>
          <Pill>Webster&apos;s groceries</Pill>
        </div>
      </div>

      <div></div>
    </NormalLayout>
  );
}
