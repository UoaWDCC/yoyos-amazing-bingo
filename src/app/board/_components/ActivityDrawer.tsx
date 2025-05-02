"use client";

import { memo, useState } from "react";
import { useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
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
import { TeamActivityClient } from "@/models/TeamCollection";
import useCompleteActivityMutation from "@/queries/useCompleteActivityMutation";

export type ActivityDrawerProps = {
  teamActivity: TeamActivityClient;
  index: number;
};

const ActivityDrawer = ({ teamActivity, index }: ActivityDrawerProps) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [error, setError] = useState("");
  const { completeActivity, isSubmitting } = useCompleteActivityMutation();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = e.target.value;
    if (answer.length === 6) {
      try {
        await completeActivity({
          activityId: teamActivity.id.padStart(2, "0"),
          answer,
        });
        setError("");
        setIsDrawerOpen(false);
        router.push(`/collect/${answer}`);
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
      key={`${teamActivity.order}`}
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
                : pokeDifficulty[teamActivity.basePoints]
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
          <DialogTitle hidden>{teamActivity.name || ""}</DialogTitle>
          <div className="flex w-full justify-center gap-2">
            <Pill>{teamActivity.name}</Pill>
          </div>
          <DrawerDescription>{teamActivity.description}</DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full justify-center">
          <Pokeball
            variant={pokeDifficulty[teamActivity.basePoints]}
            size="fixed"
            className="shadow-2xl"
          />
        </div>
        <DrawerFooter>
          <Input
            type="text"
            placeholder="Enter your answer"
            maxLength={6}
            onChange={handleInputChange}
            error={error}
            disabled={isSubmitting}
          />
          <Button>Submit code</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const MemoActivityDrawer = memo(ActivityDrawer);

export { MemoActivityDrawer as ActivityDrawer };
