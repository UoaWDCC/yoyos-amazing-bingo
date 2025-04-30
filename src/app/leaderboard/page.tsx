import Image from "next/image";

import { getAllTeams } from "@/actions/getAllTeams";
import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import headingPic from "./_assets/headingPicture.png";
import LeaderboardListItem from "./_components/LeaderboardListItem";

export default async function Leaderboard() {
  // const { teamId } = await auth();
  const teams = await getAllTeams();

  // console.log(teamId);

  /*
  TODO logic to sort teams by points before passing into LeaderboardListItem
   */

  return (
    <NormalLayout title="Leaderboard">
      {/* Questionably hardcoded spacing with margin because NormalLayout doesn't accept class override and I can't be bothered changing it */}

      <div className="mt-4 flex min-h-full flex-col gap-6">
        <Back />
        <div className="relative w-full">
          <Image src={headingPic} alt="Leaderboard" width={680} height={240} />
        </div>
        <ul className="divide-foreground/15 flex min-h-full flex-col gap-0 divide-y-2 overflow-scroll">
          {teams.slice(5).map((team, i) => {
            return <LeaderboardListItem key={i} rank={i + 5} {...team} />;
          })}
        </ul>
      </div>
    </NormalLayout>
  );
}
