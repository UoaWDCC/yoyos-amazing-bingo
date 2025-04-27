import { getAllTeams } from "@/actions/getAllTeams";
import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import LeaderboardListItem from "./_components/LeaderboardListItem";

export default async function Leaderboard() {
  const teams = await getAllTeams();

  /*
  TODO logic to sort teams by points before passing into LeaderboardListItem
   */

  return (
    <NormalLayout title="Leaderboard">
      {/* Questionably hardcoded spacing with margin because NormalLayout doesn't accept class override and I can't be bothered changing it */}

      <div className="mt-4 flex min-h-full flex-col gap-7">
        <Back />

        <ul className="divide-foreground/15 flex min-h-full flex-col gap-0 divide-y-2 overflow-scroll">
          {teams.map((team, i) => {
            return <LeaderboardListItem key={i} rank={i} {...team} />;
          })}
        </ul>
      </div>
    </NormalLayout>
  );
}
