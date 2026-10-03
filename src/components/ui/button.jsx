
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-signal text-paper hover:bg-paper hover:text-ink",
        outline: "border border-line text-paper hover:border-paper",
        ghost: "text-paper hover:text-signal",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export function Button({ className, variant, size, as: Comp = "button", ...props }) {
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}








