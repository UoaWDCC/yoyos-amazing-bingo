"use client";

import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import { GameStatusField } from "./_components/GameStatusField";
import env from "@/lib/env";
import { redirect } from "next/navigation";
import useAuth from "@/queries/useAuth";

export default function AdminPage() {
  const { data: teamId } = useAuth();
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
