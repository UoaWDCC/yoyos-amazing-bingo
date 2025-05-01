"use client";

import { memo, useState } from "react";
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
import { Square } from "@/models/Board";
import useCompleteActivityMutation from "@/queries/useCompleteActivityMutation";

export type ActivityDrawerProps = {
  square: Square;
  index: number;
};

const ActivityDrawer = ({ square, index }: ActivityDrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [error, setError] = useState("");
  const { completeActivity, isSubmitting } = useCompleteActivityMutation();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = e.target.value;
    if (answer.length === 6) {
      try {
        await completeActivity({ activityId: square.activity.id, answer });
        setError("");
        setIsDrawerOpen(false);
      } catch {
        setError("Invalid answer");
      }
    }
  };

  if (square.completed) {
    return <Pokeball variant="completed" />;
  }

  return (
    <Drawer
      key={`${square.activity.x}-${square.activity.y}`}
      onOpenChange={() => {
        if (!isDrawerOpen) setError("");
        setIsDrawerOpen((prev) => !prev);
      }}
      open={isDrawerOpen}
    >
      <DrawerTrigger disabled={square.completed}>
        <div className="relative">
          <Pokeball
            variant={
              square.completed ? "completed" : pokeDifficulty[square.points]
            }
            className={cn(
              "cursor-pointer",
              square.completed && "cursor-default",
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
          <DialogTitle hidden>{square.activity.name || ""}</DialogTitle>
          <div className="flex w-full justify-center gap-2">
            <Pill>{square.activity.name}</Pill>
          </div>
          <DrawerDescription>{square.activity.description}</DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full justify-center">
          <Pokeball
            variant={pokeDifficulty[square.points]}
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
