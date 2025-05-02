import { ComponentProps} from "react";

import { cn } from "@/lib/cn";

type InputProps = ComponentProps<"input"> & {
  error?: string;
};

export function Input(props: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className={cn(
          "border-primary focus:ring-primary disabled:bg-muted/50 focus:min-w-40 rounded-none bg-white font-mono focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          props.error &&
            "border-destructive focus:ring-destructive placeholder-destructive/80",
          props.className
        )}
      />
      {props.error && (
        <p className="text-destructive absolute top-0 -translate-y-full text-sm w-60">
          {props.error}
        </p>
      )}
    </div>
  );
}
