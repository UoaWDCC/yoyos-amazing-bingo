import { Pokeball } from "@/components/ui/pokeball/Pokeball";

export function BingoBoardSkeleton() {
  // Create a 4x4 grid of skeleton squares
  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="bg-secondary/50 flex aspect-square w-full animate-pulse flex-col items-center justify-center rounded-lg"
        >
          <Pokeball variant="completed" />
        </div>
      ))}
    </div>
  );
}
