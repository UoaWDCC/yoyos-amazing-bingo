import { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type InputProps = ComponentProps<"input"> & {
  error?: string;
};

// I give up we're duplicating this
export function TeamNameInput(props: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className={cn(
          "focus:ring-primary disabled:bg-muted/50 rounded-none bg-white font-mono focus:min-w-40 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          props.error && "focus:ring-destructive placeholder-destructive/80",
          props.className,
        )}
      />
    </div>
  );
}
