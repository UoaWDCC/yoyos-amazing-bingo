import "@/components/ui/drawer";

import { BingoBoard } from "@/app/(auth)/board/_components/BingoBoard";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";

export default function Home() {
  return (
    <NormalLayout title="Board">
      <div className="flex flex-col gap-8">
        <div className="flex w-full justify-center gap-2">
          <Pill>48pts</Pill>
        </div>
        <BingoBoard />
        <div className="flex w-full justify-center gap-2">
          <Pill>4</Pill>
          <Pill>Webster&apos;s groceries</Pill>
        </div>
      </div>

      <div></div>
    </NormalLayout>
  );
}
