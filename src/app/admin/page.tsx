"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

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

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center border-b px-6 py-4">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
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
