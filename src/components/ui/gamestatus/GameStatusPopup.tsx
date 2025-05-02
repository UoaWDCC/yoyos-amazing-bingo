"use client";

import { ReactNode, useState } from "react";

import { cn } from "@/lib/cn";
import useGetGameStatus from "@/queries/useGetGameStatus";

import Credits from "./Credits";
import Yoyover from "./Yoyover";

export function GameStatusPopup() {
  const { data } = useGetGameStatus();

  if (data === "yoyover") {
    return (
      <Backdrop>
        <Yoyover />
      </Backdrop>
    );
  } else if (data === "finished") {
    return (
      <Backdrop>
        <Credits />
      </Backdrop>
    ); // TODO: that page we talked about Ashton
  } else {
    return null;
  }
}

function Backdrop({ children }: { children: ReactNode }) {
  const [isPopupDismissed, setIsPopupDismissed] = useState(false);

  return (
    <div
      onClick={() => setIsPopupDismissed(true)}
      className={cn(
        "inset-0 flex h-dvh w-dvw flex-col items-center justify-center gap-4 bg-black/40 p-4",
        isPopupDismissed ? "hidden" : "fixed",
      )}
    >
      {children}
    </div>
  );
}
