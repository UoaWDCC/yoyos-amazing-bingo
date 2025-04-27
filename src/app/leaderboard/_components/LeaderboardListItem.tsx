import { Pill } from "@/components/ui/pill";

export default function LeaderboardListItem({name, rank, points}: {name: string, rank: number, points?: number}) {
  return (
    <li className="flex justify-between items-center gap-2 py-4">
      <div className="flex gap-4 font-medium">
        <p className="opacity-50">
          {rank}.
        </p>
        <p>
          {name}
        </p>
      </div>

      <div>
        <Pill className="font-medium">{`${points}pts`}</Pill>
      </div>


    </li>
  )
}
