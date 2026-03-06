"use client";

import { useState } from "react";

import { resetTeamProgressAction } from "@/actions/resetTeamProgressAction";
import { teamList } from "@/db/data/teamList";

const allIds = teamList.map((t) => t.id);

export function ResetProgressionButton() {
  const [selected, setSelected] = useState<Set<string>>(new Set(allIds));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; error: boolean } | null>(null);

  const allSelected = selected.size === allIds.length;

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(allIds));
  };

  const toggleTeam = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else { 
        next.add(id);
      }
      return next;
    });
  };

  const handleReset = async () => {
    if (selected.size === 0) return;
    const target = allSelected ? "all teams" : `${selected.size} team(s)`;
    if (!confirm(`Are you sure you want to reset progression for ${target}?`)) return;
    setLoading(true);
    setMessage(null);
    try {
      await resetTeamProgressAction(allSelected ? undefined : [...selected]);
      setMessage({ text: "Progression reset successfully!", error: false });
    } catch (e) {
      setMessage({ text: "Failed to reset progression.", error: true });
      console.error(e);
    } finally {
      setTimeout(() => setMessage(null), 3000);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="select-all"
          checked={allSelected}
          onChange={toggleAll}
        />
        <label htmlFor="select-all" className="font-bold hover:cursor-pointer">
          Select All
        </label>
      </div>
      <div className="flex flex-col gap-1 pl-2">
        {teamList.map((team) => (
          <div key={team.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`team-${team.id}`}
              checked={selected.has(team.id)}
              onChange={() => toggleTeam(team.id)}
            />
            <label htmlFor={`team-${team.id}`} className="hover:cursor-pointer">
              {team.name}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleReset}
        disabled={loading || selected.size === 0}
        className="rounded bg-red-500 px-4 py-2 text-white disabled:opacity-50 hover:cursor-pointer"
      >
        {loading ? "Resetting..." : `Reset Progression${allSelected ? "" : ` (${selected.size})`}`}
      </button>
      {message && (
        <p className={message.error ? "text-red-500" : "text-green-500"}>
          {message.text}
        </p>
      )}
    </div>
  );
}
