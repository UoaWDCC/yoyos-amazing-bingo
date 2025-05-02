import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import { GameStatusField } from "./_components/GameStatusField";
import { auth } from "@/actions/authActions";
import env from "@/lib/env";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const  {teamId} = await auth();
  if (teamId !== env.ADMIN_ID) {
    redirect("/board");
  }

  return (
    <NormalLayout title="Admin">
      <GameStatusField />
      <div />
    </NormalLayout>
  );
}
