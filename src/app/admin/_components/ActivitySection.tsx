"use client";

import { useState } from "react";

import useGetAllActivities from "@/queries/useGetAllActivities";

import { ActivityEditForm } from "./ActivityEditForm";

export function ActivitySection() {
  const { data: activities } = useGetAllActivities();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedActivity = activities?.find((a) => a.id === selectedId);
  const sorted = [...(activities ?? [])].sort(
    (a, b) => a.boardOrder - b.boardOrder,
  );

  return (
    <div className="flex h-full gap-6">
      <div className="w-100 flex-shrink-0 overflow-y-auto border-r pr-4">
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
        {selectedActivity ? (
          <ActivityEditForm key={selectedId} activity={selectedActivity} />
        ) : (
          <p className="text-gray-500">Select an activity to edit.</p>
        )}
      </div>
    </div>
  );
}
