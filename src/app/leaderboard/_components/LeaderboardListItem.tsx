import { Pill } from "@/components/ui/pill";

export default function LeaderboardListItem({
  name,
  rank,
  points,
}: {
  name: string;
  rank: number;
  points?: number;
}) {
  return (
    <li className="flex w-full items-center justify-between gap-2 py-4">
      <div className="flex gap-4 font-medium">
        <p className="opacity-50">{rank}.</p>
        <p>{name}</p>
      </div>
      <Pill variant="brand" className="font-medium">
        {points}pts
      </Pill>
    </li>
  );
}
