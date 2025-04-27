import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pill = cva(
  "py-1 flex gap-base text-center w-min whitespace-nowrap px-4 rounded-full select-none",
  {
    variants: {
      variant: {
        solid: "bg-pill text-foreground",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

type PillVariants = VariantProps<typeof pill>;
type Variant = PillVariants["variant"];

type PillProps = {
  className?: string;
  variant?: Variant;
} & HTMLAttributes<HTMLDivElement>

const Pill = ({ variant, ...props }: PillProps) => {
  return (
    <div {...props} className={cn(pill({ variant }), props.className)}>
      {props.children}
    </div>
  );
};

export { Pill };
