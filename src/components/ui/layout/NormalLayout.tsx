"use client";

import { ReactNode } from "react";

import { GameStatusPopup } from "../gamestatus/GameStatusPopup";
import { Footer } from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  title: string;
  noFooter?: boolean;
};

export const NormalLayout = (props: LayoutProps) => {
  return (
    <div className="responsive-body h-dvh">
      <div className="flex flex-col justify-between gap-4 overflow-hidden border-x-2 p-6">
        <Header title={props.title} />
        {props.children}
        {!props.noFooter ? <Footer /> : <div />}
      </div>
      <GameStatusPopup />
    </div>
  );
};
