import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-xl text-card-foreground transition-all duration-300 ease-out relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-1",
        elevated: "bg-card border border-border/60 shadow-md hover:shadow-xl hover:border-primary/30 hover:-translate-y-1",
        outlined: "bg-transparent border-2 border-border hover:border-primary/50 hover:bg-card/50 hover:shadow-md",
        ghost: "bg-transparent hover:bg-muted/50 hover:shadow-sm",
        glass: "bg-background/60 backdrop-blur-xl border border-border/40 shadow-md hover:shadow-lg hover:border-primary/30",
        interactive: [
          "bg-card border border-border shadow-sm cursor-pointer",
          "hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-primary/50 hover:-translate-y-2 hover:scale-[1.02]",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/0 before:to-primary/0 before:transition-all before:duration-500",
          "hover:before:from-primary/5 hover:before:to-transparent",
          "after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500",
          "after:shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.3)]",
          "hover:after:opacity-100",
        ].join(" "),
        premium: [
          "bg-gradient-to-br from-card via-card to-card border border-border/50 shadow-lg cursor-pointer",
          "hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:border-primary/60 hover:-translate-y-3 hover:scale-[1.03]",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/0 before:via-primary/0 before:to-primary/0 before:transition-all before:duration-700",
          "hover:before:from-primary/10 hover:before:via-primary/5 hover:before:to-transparent",
          "after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-all after:duration-500",
          "after:shadow-[inset_0_0_0_2px_hsl(var(--primary)/0.4),0_0_20px_hsl(var(--primary)/0.15)]",
          "hover:after:opacity-100",
        ].join(" "),
        glow: [
          "bg-card border border-border shadow-md cursor-pointer",
          "hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:border-primary/60 hover:-translate-y-2",
          "before:absolute before:-inset-[1px] before:rounded-xl before:bg-gradient-to-r before:from-primary/0 before:via-primary/30 before:to-primary/0 before:opacity-0 before:transition-opacity before:duration-500 before:-z-10",
          "hover:before:opacity-100",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-5 sm:p-6 relative z-10", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg sm:text-xl font-heading font-semibold leading-tight tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-5 sm:p-6 pt-0 relative z-10", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-5 sm:p-6 pt-0 relative z-10", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
