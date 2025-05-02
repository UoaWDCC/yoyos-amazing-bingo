"use client";

import useGetGameStatus from "@/queries/useGetGameStatus";

import Yoyover from "./Yoyover";

export function GameStatusPopup() {
  const { data } = useGetGameStatus();
  console.log("GameStatusPopup", data);

  if (data === "yoyover") {
    return <Yoyover />;
  } else if (data === "finished") {
    return <></>; // TODO: that page we talked about Ashton
  } else {
    return null;
  }
}
