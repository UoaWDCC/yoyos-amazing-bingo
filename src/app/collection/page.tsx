import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import { Board } from "@/models/Board";

import { UnknownCard } from "./_components/Card";
import ViewCardDrawer from "./_components/ViewCardDrawer";
import { auth } from "@/actions/authActions";

export default async function CodePage() {
  const { teamId } = await auth();
  console.log(teamId);

  // console.log(teamId);

  const teamActivities: Board = [
    ...Array.from({ length: 16 }).map((_, index) => ({
      isCompleted: Math.random() > 0.5,
      points: 1 + Math.floor(Math.random() * 3),
      activity: {
        id: index.toString(),
        name: "Name from API",
        code: `code-${index}`,
        cardImageName: `image-${index}.png`,
        description: "unused",
        basePoints: 1 + Math.floor(Math.random() * 3),
        boardOrder: index,
      },
    })),
  ];

  return (
    <NormalLayout title="collection">
      <div className="flex min-h-full flex-col gap-4">
        <Back />
        <div className="flex w-full justify-center">
          <Pill>
            {teamActivities.filter((teamActivity) => teamActivity.isCompleted).length}/16
            cards
          </Pill>
        </div>
        <div className="grid grid-cols-3 gap-4 overflow-y-scroll">
          {teamActivities.map((activity, index) =>
            activity.isCompleted ? (
              <ViewCardDrawer {...activity} key={index} />
            ) : (
              <UnknownCard key={index} />
            ),
          )}
        </div>
      </div>
    </NormalLayout>
  );
}
