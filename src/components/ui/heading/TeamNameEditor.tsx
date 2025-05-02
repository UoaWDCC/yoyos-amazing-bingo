"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

import { cn } from "@/lib/cn";
import mutateTeam from "@/queries/mutateTeam";
import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

import { TeamNameInput } from "./TeamNameInput";

export default function TeamNameEditor() {
  const { data: teamId } = useAuth();
  const isAdmin = teamId === "admin";
  const isEditorLive = teamId !== undefined && !isAdmin; // Don't fetch or submit data if not live
  const { data: team } = useGetTeam(isEditorLive ? teamId : null);

  let initialName: string;
  if (isAdmin) {
    initialName = "Admin";
  } else if (team === "NONE") {
    initialName = "";
  } else if (team === undefined) {
    initialName = "Loading...";
  } else {
    initialName = team.name;
  }

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [error, setError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEditing(false);
    setError(undefined);
    if (!name.trim()) {
      setError("Team name cannot be empty");
      setName(initialName);
      return;
    }
    if (name === initialName) {
      return;
    }
    try {
      if (!team || team === "NONE") return; // If loading or admin or NONE
      await mutateTeam({ ...team, name });
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Failed to update team name");
    }
    setName(initialName);
  };

  const handleClick = () => {
    inputRef.current?.focus();
    setEditing(true);
  };

  return (
    <form
      onBlur={handleSubmit}
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <TeamNameInput
        className={cn(!editing && "absolute -z-10 opacity-0")} // Hack to keep element in dom for focus
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError(undefined);
        }}
        error={error}
      />
      {/* Input elements don't shrink to text width so we have to do this :( */}
      <div
        className={cn(
          "flex items-center gap-2",
          editing && "absolute -z-10 opacity-0",
        )}
        onClick={handleClick}
      >
        <span>{name}</span>
        {isEditorLive && <Pencil size={16} />}
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
    </form>
  );
}
