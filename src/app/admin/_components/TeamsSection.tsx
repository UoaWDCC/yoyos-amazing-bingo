"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Team } from "@/models/Team";
import mutateTeam from "@/queries/mutateTeam";
import useGetAllTeams from "@/queries/useGetAllTeams";

export function TeamsSection() {
  const { data: teams } = useGetAllTeams();
  const [names, setNames] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const getName = (team: Team) => names[team.id] ?? team.name;

  const handleSave = async (team: Team) => {
    setLoading((prev) => ({ ...prev, [team.id]: true }));
    await mutateTeam({ ...team, name: getName(team) });
    setLoading((prev) => ({ ...prev, [team.id]: false }));
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Teams</h2>
      <div className="flex flex-col gap-3">
        {teams?.map((team) => (
          <div key={team.id} className="flex items-center gap-3">
            <div className="w-72">
              <Input
                value={getName(team)}
                onChange={(e) =>
                  setNames((prev) => ({ ...prev, [team.id]: e.target.value }))
                }
              />
            </div>
            <Button
              isLoading={loading[team.id]}
              onClick={() => handleSave(team)}
              className="w-24"
            >
              Save
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
