import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pill = cva(
  "py-1 flex gap-base text-center w-min whitespace-nowrap px-4 rounded-full select-none",
  {
    variants: {
      variant: {
        solid: "bg-pill text-foreground",
        brand: "bg-pill-blue text-white",
      },
      size: {
        large: "px-6 py-2",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

type PillVariants = VariantProps<typeof pill>;
type Variant = PillVariants["variant"];
type Size = PillVariants["size"];

type PillProps = {
  className?: string;
  variant?: Variant;
  size?: Size;
} & HTMLAttributes<HTMLDivElement>;

const Pill = ({ variant, size, ...props }: PillProps) => {
  return (
    <div {...props} className={cn(pill({ variant, size }), props.className)}>
      {props.children}
    </div>
  );
};

export { Pill };
