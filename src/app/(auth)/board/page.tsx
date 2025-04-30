import "@/components/ui/drawer";

import { auth } from "@/actions/authActions";
import { getTeam } from "@/actions/getTeamAction";
import BoardClientPage from "@/app/(auth)/board/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default async function BoardPage() {
  const { teamId } = await auth();
  const initialTeamData = await getTeam(teamId);

  return (
    <NormalLayout title="Board">
      <div className="flex flex-col gap-8">
        <BoardClientPage teamId={teamId} initialTeamData={initialTeamData} />
      </div>
      <div />
    </NormalLayout>
  );
}
