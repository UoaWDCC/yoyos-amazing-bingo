import "@/components/ui/drawer";

import { auth } from "@/actions/auth";
import { getTeam } from "@/actions/getTeam";
import BoardClientPage from "@/app/(auth)/board/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default async function BoardPage() {
  const { teamId } = await auth();
  // TODO: Revert to "aspa" to teamId
  const initialTeamData = await getTeam("aspa");

  return (
    <NormalLayout title="Board">
      <div className="flex flex-col gap-8">
        <BoardClientPage teamId={teamId} initialTeamData={initialTeamData} />
      </div>
      <div />
    </NormalLayout>
  );
}
