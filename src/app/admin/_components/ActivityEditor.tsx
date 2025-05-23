"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import mutateActivityDescription from "@/queries/mutateActivityDescription";
import useGetAllActivities from "@/queries/useGetAllActivities";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function ActivityEditor() {
  const { data: activities } = useGetAllActivities();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const activity = activities?.find((a) => a.id === id);
    if (activity) {
      setDescription(activity.description);
    }
  };

  const handleSave = async () => {
    if (!selectedId) return;
    setLoading(true);
    await mutateActivityDescription(selectedId, description);
    setLoading(false);
    alert("Updated successfully!");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-bold">Select Activity</label>
        <select
          value={selectedId ?? ""}
          onChange={(e) => handleSelect(e.target.value)}
          className="rounded border p-2"
        >
          <option value="" disabled>
            Select one
          </option>
          {activities?.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>

      {selectedId && (
        <>
          <MDEditor
            value={description}
            onChange={(val = "") => setDescription(val)}
          />
          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </>
      )}
    </div>
  );
}
