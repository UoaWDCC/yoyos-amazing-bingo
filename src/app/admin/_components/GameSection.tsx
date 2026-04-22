import { GameStatusField } from "./GameStatusField";
import { ResetProgressionButton } from "./ResetProgressionButton";

export function GameSection() {
  return (
    <div className="flex max-w-md flex-col gap-6">
      <h2 className="text-xl font-bold">Game</h2>

      <div className="flex flex-col gap-3 rounded border p-4">
        <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Game Status
        </h3>
        <GameStatusField />
      </div>

      <div className="flex flex-col gap-3 rounded border p-4">
        <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Reset Progression
        </h3>
        <ResetProgressionButton />
      </div>
    </div>
  );
}
