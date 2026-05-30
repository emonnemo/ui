import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="radiogroup"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
);
RadioGroup.displayName = "RadioGroup";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="radio"
      className={cn(
        "h-4 w-4 shrink-0 accent-primary disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Radio.displayName = "Radio";

export interface RadioFieldProps extends RadioProps {
  label: React.ReactNode;
  description?: React.ReactNode;
  fieldClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
}

const RadioField = React.forwardRef<HTMLInputElement, RadioFieldProps>(
  (
    {
      className,
      fieldClassName,
      labelClassName,
      descriptionClassName,
      label,
      description,
      ...props
    },
    ref
  ) => (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-md border border-transparent p-2 transition-colors hover:bg-accent has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        fieldClassName
      )}
    >
      <Radio ref={ref} className={cn("mt-0.5", className)} {...props} />
      <span className="grid gap-1">
        <span className={cn("text-sm font-medium leading-none", labelClassName)}>
          {label}
        </span>
        {description ? (
          <span
            className={cn(
              "text-sm leading-snug text-muted-foreground",
              descriptionClassName
            )}
          >
            {description}
          </span>
        ) : null}
      </span>
    </label>
  )
);
RadioField.displayName = "RadioField";

export { Radio, RadioField, RadioGroup };
