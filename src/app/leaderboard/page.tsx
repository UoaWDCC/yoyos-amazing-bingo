import Image from "next/image";

import { auth } from "@/actions/authActions";
import { getAllTeamsAction } from "@/actions/getAllTeamsAction";
import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import PixelArrowL from "@/components/ui/svg/PixelArrowL";
import { getTeamTotalPoints } from "@/logic/points/getTeamTotalPoints";

import headingPic from "./_assets/headingPicture.png";
import LeaderboardListItem from "./_components/LeaderboardListItem";

export default async function Leaderboard() {
  const { teamId } = await auth();
  const teams = await getAllTeamsAction(); // Won't include top 5 if not admin

  teams.sort((a, b) => getTeamTotalPoints(b) - getTeamTotalPoints(a));

  /*
  TODO logic to sort teams by points before passing into LeaderboardListItem
   */

  return (
    <NormalLayout title="Leaderboard">
      {/* Questionably hardcoded spacing with margin because NormalLayout doesn't accept class override and I can't be bothered changing it */}

      <div className="mt-4 flex min-h-full flex-col gap-6">
        <Back />
        <div className="relative w-full">
          <Image
            src={headingPic}
            alt="Leaderboard"
            className="mask-center"
            width={680}
            height={240}
          />
        </div>
        {teams && (
          <div className="flex w-full items-center justify-center gap-4">
            <PixelArrowL className="rotate-180 animate-[arrow-left_1s_infinite_ease-in-out]" />
            <Pill variant="gold">You&apos;re in the top 5!</Pill>
            <PixelArrowL className="animate-[arrow-left_1s_infinite_ease-in-out]" />
          </div>
        )}
        <ul className="divide-foreground/15 flex flex-col gap-0 divide-y-2">
          {teams.slice(5).map((team, i) => {
            return (
              <LeaderboardListItem
                key={i}
                rank={i + 6}
                teamId={teamId}
                {...team}
              />
            );
          })}
        </ul>
      </div>
    </NormalLayout>
  );
}
