import { ReactNode } from "react";

import Header from "./Header";
import Yoyover from "./Yoyover";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const NormalLayout = (props: LayoutProps) => {
  return (
    <div className="responsive-body">
      <div className="flex min-h-dvh flex-col justify-between gap-4 overflow-hidden border-x-2 p-6">
        <Header title={props.title} />
        {props.children}
      </div>
      {false && <Yoyover />}
    </div>
  );
};
