import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const button = cva(
  "py-3 text-center w-full px-4 cursor-pointer whitespace-nowrap disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-btn-solid text-btn-solid-fg",
        outline: "border-btn-solid border text-btn-outline-fg",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

type ButtonVariants = VariantProps<typeof button>;
type Variant = ButtonVariants["variant"];

type ButtonProps = {
  className?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(button({ variant }), props.className)}>
      {props.children}
    </button>
  );
};

export { Button };
