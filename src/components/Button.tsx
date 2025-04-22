import { ComponentPropsWithoutRef } from "react";

export function Button(props: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className="h-[45px] w-full rounded-none bg-primary px-4 py-2 text-center text-primary-foreground transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none disabled:opacity-50"
    />
  );
}
