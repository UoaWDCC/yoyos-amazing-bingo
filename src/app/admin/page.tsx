"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import { mutate } from "swr";

import { signOut } from "@/actions/authActions";
import useAuth from "@/queries/useAuth";

import { ActivitySection } from "./_components/ActivitySection";
import { AdminSidebar } from "./_components/AdminSidebar";
import { GameSection } from "./_components/GameSection";
import { LeaderboardSection } from "./_components/LeaderboardSection";
import { TeamsSection } from "./_components/TeamsSection";

type Section = "game" | "activities" | "teams" | "leaderboard";

export default function AdminPage() {
  const { data: teamId, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState<Section>("game");
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!teamId) router.replace("/");
    else if (teamId !== "admin") router.replace("/board");
  }, [isLoading, teamId, router]);

  if (isLoading || teamId !== "admin") return null;

  const handleSignOut = async () => {
    await signOut();
    mutate("auth", null);
    router.push("/");
  };

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
        >
          Sign out <LogOutIcon size={16} />
        </button>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar activeSection={activeSection} onSelect={setActiveSection} />
        <main className="flex-1 overflow-auto p-8">
          {activeSection === "game" && <GameSection />}
          {activeSection === "activities" && <ActivitySection />}
          {activeSection === "teams" && <TeamsSection />}
          {activeSection === "leaderboard" && <LeaderboardSection />}
        </main>
      </div>
    </div>
  );
}
