import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
};

export function Input(props: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className={cn(
          "border-primary focus:ring-primary disabled:bg-muted/50 h-[45px] w-full rounded-none border px-4 py-2 font-mono focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          props.error &&
            "border-destructive focus:ring-destructive placeholder-destructive/80",
        )}
      ></input>
      {props.error && (
        <p className="text-destructive absolute top-0 -translate-y-full text-sm">
          {props.error}
        </p>
      )}
    </div>
  );
}
