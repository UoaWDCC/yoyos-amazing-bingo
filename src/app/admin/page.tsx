"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import useAuth from "@/queries/useAuth";

import { GameStatusField } from "./_components/GameStatusField";

export default function AdminPage() {
  const { data: teamId } = useAuth();
  if (!teamId) return null;
  if (teamId !== "admin") redirect("/board");

  return (
    <NormalLayout title="Admin">
      <GameStatusField />
      <Link className="underline" href="/leaderboard">
        Leaderboard
      </Link>
    </NormalLayout>
  );
}
