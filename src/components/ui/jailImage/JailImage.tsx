import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { jailImages } from "@/assets/images/jailImages";
import { cn } from "@/lib/cn";
import { cardToJailKey } from "@/lib/imageKey";

const jailImage = cva("rounded-lg bg-cover bg-center bg-neutral-400", {
  variants: {
    size: {
      full: "aspect-square size-full",
      fixed: "size-24",
      lg: "size-32",
    },
  },
  defaultVariants: {
    size: "full",
  },
});

type JailImageProps = {
  cardImageName: string;
} & VariantProps<typeof jailImage> &
  HTMLAttributes<HTMLDivElement>;

const JailImage = ({ cardImageName, size, style, className, ...props }: JailImageProps) => {
  const jailKey = cardToJailKey(cardImageName) as keyof typeof jailImages;
  const src = jailImages[jailKey].src;

  return (
    <div
      {...props}
      className={cn(jailImage({ size }), className)}
      style={{ backgroundImage: `url(${src})`, ...style }}
    />
  );
};

export { JailImage };
