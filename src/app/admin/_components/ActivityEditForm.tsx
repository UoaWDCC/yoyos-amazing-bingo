"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { cards } from "@/assets/pokecards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity } from "@/models/Activity";
import mutateActivity from "@/queries/mutateActivity";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type ActivityForm = Omit<Activity, "id">;

type ActivityEditFormProps = {
  activity: Activity;
}

export function ActivityEditForm({ activity }: ActivityEditFormProps) {
  const [form, setForm] = useState<ActivityForm>({
    name: activity.name,
    code: activity.code,
    cardImageName: activity.cardImageName,
    description: activity.description,
    basePoints: activity.basePoints,
    boardOrder: activity.boardOrder,
  });
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await mutateActivity({ id: activity.id, ...form });
    setLoading(false);
  };

  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <h2 className="text-xl font-bold">Edit: {activity.name}</h2>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Name</span>
        <Input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Code (6 chars)</span>
        <Input
          value={form.code}
          maxLength={6}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Card Image</span>
        <select
          value={form.cardImageName}
          onChange={(e) => setForm({ ...form, cardImageName: e.target.value })}
          className="border-primary h-[45px] w-full rounded-none border bg-white px-4 font-mono"
        >
          {Object.keys(cards.images).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Description</span>
        <MDEditor
          value={form.description}
          onChange={(val = "") => setForm({ ...form, description: val })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Base Points</span>
        <Input
          type="number"
          value={form.basePoints}
          onChange={(e) =>
            setForm({ ...form, basePoints: Number(e.target.value) })
          }
        />
      </label>

      <Button isLoading={loading} onClick={handleSave} className="mt-2 w-32">
        Save
      </Button>
    </div>
  );
}
