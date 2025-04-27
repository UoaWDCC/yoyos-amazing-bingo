import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const pokeball = cva(
  "aspect-square size-full border rounded-lg bg-neutral-400 bg-size-[100%] select-none",
  {
    variants: {
      variant: {
        completed: "poke0",
        normal: "poke1",
        great: "poke2",
        ultra: "poke3",
        master: "poke4",
      },
      size: {
        full: "size-full",
        fixed: "size-24",
      },
    },
    defaultVariants: {
      variant: "normal",
      size: "full",
    },
  },
);

export const pokeDifficulty = [
  "completed",
  "normal",
  "great",
  "ultra",
  "master",
] as const;

type PokeballVariants = VariantProps<typeof pokeball>;
type Variant = (typeof pokeDifficulty)[number];
type Size = PokeballVariants["size"];

type pokeballProps = {
  className?: string;
  variant?: Variant;
  size?: Size;
} & HTMLAttributes<HTMLDivElement>;

const Pokeball = ({ variant, size, ...props }: pokeballProps) => {
  return (
    <div
      {...props}
      className={cn(pokeball({ variant, size }), props.className)}
    >
      {props.children}
    </div>
  );
};

export { Pokeball };
export type { PokeballVariants, Size as PokeSize, Variant as PokeVariant };
