"use client";

import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import { GameStatusField } from "./_components/GameStatusField";
import { redirect } from "next/navigation";
import useAuth from "@/queries/useAuth";

export default function AdminPage() {
  const { data: teamId } = useAuth();
  if (!teamId) return null;
  if (teamId !== "admin") redirect("/board");

  return (
    <NormalLayout title="Admin">
      <GameStatusField />
      <div />
    </NormalLayout>
  );
}
