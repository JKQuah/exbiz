import { cn } from "@/lib/utils";
import React from "react";

export default function AppSubtitle({
  className,
  children,
}: {
  className?: string;
  children: string | React.ReactNode;
}): React.JSX.Element {
  return (
    <p
      className={cn(
        "text-neutral-600 dark:text-neutral-300 text-sm md:text-base",
        className
      )}
    >
      {children}
    </p>
  );
}
