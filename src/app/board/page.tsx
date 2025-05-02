import "@/components/ui/drawer";

import Link from "next/link";
import { Crown } from "lucide-react";

import { auth } from "@/actions/authActions";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import CardStack from "@/components/ui/svg/CardStack";
import { getActivitiesByTeamIdService } from "@/services/getActivitiesByTeamIdService";

import { BingoBoard } from "./_components/BingoBoard";

export default async function BoardPage() {
  const { teamId } = await auth(); // Retrieve the teamId from authentication
  // TODO: Revert to "aspa" to teamId
  const teamActivites = await getActivitiesByTeamIdService(teamId);

  return (
    <NormalLayout title="Board">
      <div className="flex flex-col gap-8">
        <BingoBoard teamActivities={teamActivites} />
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
