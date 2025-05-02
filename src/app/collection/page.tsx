import { auth } from "@/actions/authActions";
import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import { getActivitiesByTeamIdService } from "@/services/getActivitiesByTeamIdService";

import { UnknownCard } from "./_components/Card";
import ViewCardDrawer from "./_components/ViewCardDrawer";

export default async function CodePage() {
  const { teamId } = await auth();
  const teamCollection = await getActivitiesByTeamIdService(teamId);

  teamCollection.sort((a, b) => a.order - b.order);

  return (
    <NormalLayout title="collection">
      <div className="flex min-h-full flex-col gap-4">
        <Back />
        <div className="flex w-full justify-center">
          <Pill>
            {
              teamCollection.filter((teamActivity) => teamActivity.isCompleted)
                .length
            }
            /16 cards
          </Pill>
        </div>
        <div className="grid grid-cols-3 gap-4 overflow-y-scroll">
          {teamCollection.map((collection, index) =>
            collection.isCompleted ? (
              <ViewCardDrawer {...collection} key={index} />
            ) : (
              <UnknownCard key={index} />
            ),
          )}
        </div>
      </div>
    </NormalLayout>
  );
}
