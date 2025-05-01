import { FC, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const heading = cva("", {
  variants: {
    size: {
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
  },
});

type HeadingVariants = VariantProps<typeof heading>;
type Size = NonNullable<HeadingVariants["size"]>;

type HeadingProps = {
  className?: string;
  size?: Size;
  as?: "h1" | "h2" | "h3";
} & HTMLAttributes<HTMLHeadingElement>;

const HeadingUI = ({ size, as = "h1", ...props }: HeadingProps) => {
  const Component = as;

  return (
    <Component {...props} className={cn(heading({ size }), props.className)}>
      {props.children}
    </Component>
  );
};

type HeadingComponent = {
  h1: FC<HeadingProps>;
  h2: FC<HeadingProps>;
  h3: FC<HeadingProps>;
} & FC<Omit<HeadingProps, "as">>;

const HeadingWithNamespace = HeadingUI as HeadingComponent;

HeadingWithNamespace.h1 = (props) => <HeadingUI as="h1" {...props} />;
HeadingWithNamespace.h2 = (props) => <HeadingUI as="h2" {...props} />;
HeadingWithNamespace.h3 = (props) => <HeadingUI as="h3" {...props} />;

export { HeadingWithNamespace as Heading };
