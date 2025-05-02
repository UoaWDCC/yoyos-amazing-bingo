"use client";

import { ReactNode, useState } from "react";

import useGetGameStatus from "@/queries/useGetGameStatus";

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
        <p>...</p>
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
      className={`${isPopupDismissed ? "hidden" : "fixed"} inset-0 flex h-dvh w-dvw flex-col items-center justify-center gap-4 bg-black/40 px-4`}
    >
      {children}
    </div>
  );
}
