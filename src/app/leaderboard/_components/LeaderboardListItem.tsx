import { Pill } from "@/components/ui/pill";
import PixelArrowL from "@/components/ui/svg/PixelArrowL";
import { cn } from "@/lib/cn";
import { getTeamTotalPoints } from "@/logic/points/getTeamTotalPoints";
import { Team } from "@/models/Team";

type LeaderBoardItemProps = {
  team: Team;
  rank: number;
  isYou: boolean;
};

export default function LeaderboardListItem({
  team,
  rank,
  isYou,
}: LeaderBoardItemProps) {
  const points = getTeamTotalPoints(team);

  return (
    <li
      className={cn(
        "flex w-full items-center justify-between gap-2 py-4",
        isYou && "blue-gradient-bg",
      )}
    >
      <div className="flex gap-4 font-medium">
        <p className="opacity-50">{rank}.</p>
        <p className="flex gap-2">
          {team.name}{" "}
          {isYou && (
            <span className="flex items-center justify-center gap-4">
              (YOU){" "}
              <PixelArrowL className="animate-[arrow-left_1s_infinite_ease-in-out]" />
            </span>
          )}
        </p>
      </div>
      <Pill variant="brand" className="font-medium">
        {points}pts
      </Pill>
    </li>
  );
}
