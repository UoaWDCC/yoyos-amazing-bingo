import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pokeball = cva(
  "aspect-square size-full border rounded-lg bg-neutral-400 bg-size-[100%] select-none",
  {
    variants: {
      variant: {
        normal: "poke1",
        great: "poke2",
        ultra: "poke3",
        master: "poke4",
      },
      size: {
        full: "size-full",
        fixed: "size-8",
      },
    },
    defaultVariants: {
      variant: "normal",
      size: "full",
    },
  },
);

type PokeballVariants = VariantProps<typeof pokeball>;
type Variant = PokeballVariants["variant"];

interface pokeballProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: Variant;
}

const Pokeball = ({ variant, ...props }: pokeballProps) => {
  return (
    <div {...props} className={cn(pokeball({ variant }), props.className)}>
      {props.children}
    </div>
  );
};

export { Pokeball };
