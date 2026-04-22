"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import { mutate } from "swr";

import { signOut } from "@/actions/authActions";
import useAuth from "@/queries/useAuth";

import { ActivitySection } from "./_components/ActivitySection";
import { AdminSidebar } from "./_components/AdminSidebar";
import { GameSection } from "./_components/GameSection";
import { TeamsSection } from "./_components/TeamsSection";

type Section = "game" | "activities" | "teams";

export default function AdminPage() {
  const { data: teamId } = useAuth();
  const [activeSection, setActiveSection] = useState<Section>("game");

  if (!teamId) return null;
  if (teamId !== "admin") redirect("/board");

  const handleSignOut = async () => {
    await signOut();
    mutate("auth", null);
    redirect("/");
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
        </main>
      </div>
    </div>
  );
}
