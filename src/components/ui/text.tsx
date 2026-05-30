import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-normal lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-normal",
      h3: "scroll-m-20 text-2xl font-semibold tracking-normal",
      h4: "scroll-m-20 text-xl font-semibold tracking-normal",
      p: "text-base leading-7",
      lead: "text-xl leading-7 text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      code: "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type TextVariant = NonNullable<VariantProps<typeof textVariants>["variant"]>;

const defaultElementByVariant: Record<TextVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  code: "code",
} as const;

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant = "p", asChild = false, as, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? defaultElementByVariant[variant ?? "p"];

    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
