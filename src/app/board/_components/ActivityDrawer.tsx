"use client";

import { memo, useState } from "react";
import { useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
import { JailImage } from "@/components/ui/jailImage/JailImage";
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
    if (answer.length === teamActivity.activity.code.length) {
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
    return (
      <div className="aspect-square size-full rounded-lg border bg-neutral-200 select-none" />
    );
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
          <JailImage
            cardImageName={teamActivity.activity.cardImageName}
            className="cursor-pointer select-none border"
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
          <div className="flex w-full items-start justify-between gap-2">
            <Pill>{teamActivity.activity.name}</Pill>
            <div>
              <Pill>
                {teamActivity.activity.basePoints}
                pts
              </Pill>
              {isSpecialActivity && (
                <div className="mt-1 text-center text-sm whitespace-pre text-pink-500">
                  {" "}
                  +1!
                  <br />
                </div>
              )}
            </div>
          </div>
          <DrawerDescription>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {teamActivity.activity.description}
            </ReactMarkdown>
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full justify-center">
          <JailImage
            cardImageName={teamActivity.activity.cardImageName}
            size="fixed"
            className="border shadow-2xl"
          />
        </div>
        <DrawerFooter>
          <div className="flex w-full flex-col gap-4">
            <Input
              type="text"
              placeholder="Enter code"
              maxLength={teamActivity.activity.code.length}
              onChange={handleInputChange}
              error={error}
              disabled={isSubmitting}
            />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const MemoActivityDrawer = memo(ActivityDrawer);

export { MemoActivityDrawer as ActivityDrawer };
