import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/cn";

const button = cva(
  "py-3 text-center flex items-center justify-center w-full px-4 cursor-pointer whitespace-nowrap disabled:opacity-50",
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
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, isLoading, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(button({ variant }), props.className)}>
      {props.children}
      {isLoading && (
        <div className="load-popup">
          <LoaderCircle className="size-5 animate-spin *:stroke-white" />
        </div>
      )}
    </button>
  );
};

export { Button };
