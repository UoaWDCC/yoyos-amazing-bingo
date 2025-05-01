import "@/components/ui/drawer";

import Link from "next/link";
import { Crown } from "lucide-react";

import BoardClientPage from "@/app/(auth)/board/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import CardStack from "@/components/ui/svg/CardStack";

export default async function BoardPage() {
  // const { teamId } = await auth();
  // TODO: Revert to "aspa" to teamId
  // const initialTeamData = await getTeam("aspa");

  return (
    <NormalLayout title="Board">
      <div className="flex flex-col gap-8">
        <BoardClientPage />
      </div>
      <div className="flex w-full justify-center gap-4">
        <Link href="/leaderboard">
          <Pill size="large" variant="brand">
            <Crown color="white" />
          </Pill>
        </Link>
        <Link href="/collection">
          <Pill size="large" variant="brand">
            <CardStack />
          </Pill>
        </Link>
      </div>
    </NormalLayout>
  );
}
