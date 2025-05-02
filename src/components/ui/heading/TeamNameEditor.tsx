"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

import { updateTeamAction } from "@/actions/updateTeamNameAction";
import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

import { Input } from "../input";
import { cn } from "@/lib/cn";

export default function TeamNameEditor() {
  const { data: teamId } = useAuth();
  const isAdmin = teamId === "admin";
  const isEditorLive = teamId !== undefined && !isAdmin; // Don't fetch or submit data if not live
  const { data: team } = useGetTeam(isEditorLive ? teamId : null);
  const initialName = isAdmin ? "Admin" : (team?.name ?? "");

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [error, setError] = useState<string | undefined>(undefined);
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEditing(false);
    if (!name.trim()) {
      setError("Team name cannot be empty");
      return;
    }
    if (name === initialName) {
      return;
    }
    setPending(true);
    try {
      if (!isEditorLive) return;
      await updateTeamAction({ id: teamId, name });
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Failed to update team name");
    } finally {
      setPending(false);
    }
  };

  const handleClick = () => {
    inputRef.current?.focus();
    setEditing(true);
  };

  return (
    <form onBlur={handleSubmit} onSubmit={handleSubmit}
      className="flex items-center"
    >
      <Input
        className={cn(!editing && "absolute -z-10 opacity-0")} // Hack to keep element in dom for focus
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError(undefined);
        }}
        error={error}
        disabled={pending}
      />
      {/* Input elements don't shrink to text width so we have to do this :( */}
      <div className={cn("flex items-center gap-2", editing && "absolute -z-10 opacity-0")} onClick={handleClick}>
        <span>{name}</span>
        <Pencil size={16} />
      </div>
    </form>
  )
}
