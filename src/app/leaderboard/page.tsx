import Link from "next/link";

import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import LeaderboardListItem from "./_components/LeaderboardListItem";
import Back from "@/components/ui/back/Back";

import { getAllTeams } from "@/actions/getAllTeams";

export default async function Leaderboard() {

  const teams =  await getAllTeams("sdfghjk");

  /*
  TODO logic to sort teams by points before passing into LeaderboardListItem
   */

  return (
    <NormalLayout title="Leaderboard">

      {/* Questionably hardcoded spacing with margin because NormalLayout doesn't accept class override and I can't be bothered changing it */}

      <div className="flex flex-col gap-6 min-h-full mt-4">
        <Back/>

        <ul className="min-h-full flex flex-col gap-0 divide-y-2 divide-foreground/75">
          {
            teams.map((team, i) => {
              return <LeaderboardListItem key={i}
                                          rank = {i}
                                          {...team}/>
            })
          }
        </ul>
      </div>



    </NormalLayout>
  );
}
