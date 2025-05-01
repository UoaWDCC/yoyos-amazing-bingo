import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import { Board } from "@/models/Board";

import { UnknownCard } from "./_components/Card";
import ViewCardDrawer from "./_components/ViewCardDrawer";
import { auth } from "@/actions/authActions";

export default async function CodePage() {
  const { teamId } = await auth();

  // console.log(teamId);

  const activities: Board = [
    ...Array.from({ length: 16 }).map((_, index) => ({
      completed: Math.random() > 0.5,
      points: 1 + Math.floor(Math.random() * 3),
      activity: {
        id: index.toString(),
        name: "Name from API",
        description: "unused",
        x: 1, //unused
        y: 1, //unused
      },
    })),
  ];

  return (
    <NormalLayout title="collection">
      <div className="flex min-h-full flex-col gap-4">
        <Back />
        <div className="flex w-full justify-center">
          <Pill>
            {activities.filter((activity) => activity.completed).length}/16
            cards
          </Pill>
        </div>
        <div className="grid grid-cols-3 gap-4 overflow-y-scroll">
          {activities.map((activity, index) =>
            activity.completed ? (
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
