"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { cards } from "@/assets/pokecards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity } from "@/models/Activity";
import mutateActivity from "@/queries/mutateActivity";
import useGetAllActivities from "@/queries/useGetAllActivities";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type ActivityForm = Omit<Activity, "id">;

export function ActivitySection() {
  const { data: activities } = useGetAllActivities();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<ActivityForm | null>(null);
  const [loading, setLoading] = useState(false);

  const selectedActivity = activities?.find((a) => a.id === selectedId);

  useEffect(() => {
    const activity = activities?.find((a) => a.id === selectedId);
    if (activity) {
      setForm({
        name: activity.name,
        code: activity.code,
        cardImageName: activity.cardImageName,
        description: activity.description,
        basePoints: activity.basePoints,
        boardOrder: activity.boardOrder,
      });
    }
    // Intentionally exclude `activities` — we only want to reset the form when
    // the user selects a different activity, not on every SWR revalidation (e.g.
    // window focus). This means external updates to the selected activity won't
    // be reflected in the form while editing, but that's fine since there is
    // only one admin account and no concurrent edits are possible.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  const handleSave = async () => {
    if (!selectedId || !form) return;
    setLoading(true);
    await mutateActivity({ id: selectedId, ...form });
    setLoading(false);
  };

  const sorted = [...(activities ?? [])].sort(
    (a, b) => a.boardOrder - b.boardOrder,
  );

  return (
    <div className="flex h-full gap-6">
      <div className="w-56 flex-shrink-0 overflow-y-auto border-r pr-4">
        <h2 className="mb-3 text-xl font-bold">Activities</h2>
        <ul className="flex flex-col gap-1">
          {sorted.map((activity) => (
            <li key={activity.id}>
              <button
                onClick={() => setSelectedId(activity.id)}
                className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${
                  selectedId === activity.id
                    ? "bg-gray-100 font-semibold text-gray-900"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="mr-2 text-gray-400">#{activity.boardOrder}</span>
                {activity.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 overflow-y-auto">
        {form && selectedActivity ? (
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-xl font-bold">Edit: {selectedActivity.name}</h2>

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
                onChange={(e) =>
                  setForm({ ...form, cardImageName: e.target.value })
                }
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
              <span className="text-sm font-medium">Base Points (1–3)</span>
              <Input
                type="number"
                min={1}
                max={3}
                value={form.basePoints}
                onChange={(e) =>
                  setForm({ ...form, basePoints: Number(e.target.value) })
                }
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Board Order (0–15)</span>
              <Input
                type="number"
                min={0}
                max={15}
                value={form.boardOrder}
                onChange={(e) =>
                  setForm({ ...form, boardOrder: Number(e.target.value) })
                }
              />
            </label>

            <Button isLoading={loading} onClick={handleSave} className="mt-2 w-32">
              Save
            </Button>
          </div>
        ) : (
          <p className="text-gray-500">Select an activity to edit.</p>
        )}
      </div>
    </div>
  );
}
