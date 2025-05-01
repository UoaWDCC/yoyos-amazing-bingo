"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

import { updateTeamAction } from "@/actions/updateTeamNameAction";

import { Input } from "../input";

type TeamNameEditorProps = {
  teamId: string;
  initialName: string;
};

export default function TeamNameEditor({
  teamId,
  initialName,
}: TeamNameEditorProps) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [error, setError] = useState<string | undefined>(undefined);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Team name cannot be empty");
      return;
    }
    if (name === initialName) {
      setEditing(false);
      return;
    }
    setPending(true);
    try {
      await updateTeamAction({ id: teamId, name });
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Failed to update team name");
    } finally {
      setPending(false);
      setEditing(false);
    }
  };

  return editing ? (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError(undefined);
        }}
        error={error}
        disabled={pending}
      />
      <button type="submit" disabled={pending}>
        Save
      </button>
      <button
        type="button"
        onClick={() => setEditing(false)}
        disabled={pending}
      >
        Cancel
      </button>
    </form>
  ) : (
    <div className="flex items-center gap-2">
      <span>{name}</span>
      <button onClick={() => setEditing(true)} aria-label="Edit team name">
        <Pencil size={16} />
      </button>
    </div>
  );
}
