"use client";

import { memo, useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Pill } from "@/components/ui/pill";
import { Pokeball, pokeDifficulty } from "@/components/ui/pokeball/Pokeball";
import { cn } from "@/lib/utils";
import { Square } from "@/models/Board";
import useCompleteActivityMutation from "@/queries/useCompleteActivityMutation";

export type ActivityDrawerProps = {
  square: Square;
}

const ActivityDrawer = ({ square }: ActivityDrawerProps) => {
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
        <Pokeball
          variant={
            square.completed ? "completed" : pokeDifficulty[square.points]
          }
          className={cn("cursor-pointer", square.completed && "cursor-default")}
        />
      </DrawerTrigger>
      <DrawerContent>
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
          <DrawerClose asChild>
            <Button>CLOSE</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const MemoActivityDrawer = memo(ActivityDrawer);

export { MemoActivityDrawer as ActivityDrawer };
