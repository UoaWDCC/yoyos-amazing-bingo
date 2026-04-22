import { GameStatusField } from "./GameStatusField";
import { ResetProgressionButton } from "./ResetProgressionButton";

export function GameSection() {
  return (
    <div className="flex max-w-md flex-col gap-6">
      <h2 className="text-xl font-bold">Game</h2>
      <GameStatusField />
      <ResetProgressionButton />
    </div>
  );
}
