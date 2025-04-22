import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const NormalLayout = (props: LayoutProps) => {
  return (
    <div className="responsive-body">
      <div className="flex h-dvh flex-col justify-between gap-4 border-x-2 p-6">
        {props.children}
      </div>
    </div>
  );
};
