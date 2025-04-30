import "@/components/ui/drawer";

import { redirect } from "next/navigation";

import { auth } from "@/actions/authActions";
import { getTeamAction } from "@/actions/getTeamAction";
import BoardClientPage from "@/app/board/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default async function BoardPage() {
  const { teamId } = await auth();
  if (!teamId) {
    return redirect("/");
  }
  const initialTeamData = await getTeamAction(teamId);

  return (
    <NormalLayout title="Board">
      <div className="flex flex-col gap-8">
        <BoardClientPage teamId={teamId} initialTeamData={initialTeamData} />
      </div>
      <div />
    </NormalLayout>
  );
}
