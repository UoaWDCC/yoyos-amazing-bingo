import { ComponentPropsWithoutRef } from "react";

export function Input(props: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className="h-[45px] w-full rounded-none border border-primary px-4 py-2 font-mono focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
    />
  );
}
