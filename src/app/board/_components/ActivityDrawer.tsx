"use client";

import { memo, useState } from "react";
import { useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Pill } from "@/components/ui/pill";
import { Pokeball, pokeDifficulty } from "@/components/ui/pokeball/Pokeball";
import { cn } from "@/lib/cn";
import { getPointsOfActivityForTeam } from "@/logic/points/getPointsOfActivityForTeam";
import { TeamActivity } from "@/models/TeamActivity";
import useCompleteActivityMutation from "@/queries/useCompleteActivityMutation";

export type ActivityDrawerProps = {
  teamActivity: TeamActivity;
  index: number;
  isSpecialActivity: boolean;
};

const ActivityDrawer = ({
  teamActivity,
  index,
  isSpecialActivity,
}: ActivityDrawerProps) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [error, setError] = useState("");
  const { completeActivity, isSubmitting } = useCompleteActivityMutation();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = e.target.value;
    if (answer.length === 6) {
      try {
        await completeActivity({
          activityId: teamActivity.activity.id.padStart(2, "0"),
          answer,
        });
        setError("");
        setIsDrawerOpen(false);
        router.push(`/collect/${teamActivity.activity.cardImageName}`);
      } catch {
        setError("Invalid answer");
      }
    }
  };

  if (teamActivity.isCompleted) {
    return <Pokeball variant="completed" />;
  }

  return (
    <Drawer
      key={`${teamActivity.activity.boardOrder}`}
      onOpenChange={() => {
        if (!isDrawerOpen) setError("");
        setIsDrawerOpen((prev) => !prev);
      }}
      open={isDrawerOpen}
    >
      <DrawerTrigger disabled={teamActivity.isCompleted}>
        <div className="relative">
          <Pokeball
            variant={
              teamActivity.isCompleted
                ? "completed"
                : isSpecialActivity
                  ? "master"
                  : pokeDifficulty[teamActivity.activity.basePoints]
            }
            className={cn(
              "cursor-pointer",
              teamActivity.isCompleted && "cursor-default",
            )}
          />
          <p className="bg-pill absolute right-0 bottom-0 rounded px-2 py-1 text-xs font-bold">
            {index + 1}
          </p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="bg-pill-blue absolute bottom-0 left-1/2 -z-10 size-64 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"></div>
        <DrawerHeader>
          {/* required for screen reader */}
          <DialogTitle hidden>{teamActivity.activity.name || ""}</DialogTitle>
          <div className="flex w-full justify-between gap-2">
            <Pill>{teamActivity.activity.name}</Pill>
            <Pill>
              {getPointsOfActivityForTeam(
                teamActivity.activity,
                isSpecialActivity,
              )}
              pts
            </Pill>
          </div>
          <DrawerDescription>
            {isSpecialActivity && (
              <span>
                MASTER BALL: +1 pts
                <br />
                <br />
              </span>
            )}
            {teamActivity.activity.description}
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full justify-center">
          <Pokeball
            variant={
              isSpecialActivity
                ? "master"
                : pokeDifficulty[teamActivity.activity.basePoints]
            }
            size="fixed"
            className="shadow-2xl"
          />
        </div>
        <DrawerFooter>
          <Input
            type="text"
            placeholder="Enter code"
            maxLength={6}
            onChange={handleInputChange}
            error={error}
            disabled={isSubmitting}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const MemoActivityDrawer = memo(ActivityDrawer);

export { MemoActivityDrawer as ActivityDrawer };