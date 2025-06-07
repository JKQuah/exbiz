import { cn } from "@/lib/utils";
import React from "react";

export default function AppTitle({
  className,
  children,
}: {
  className?: string;
  children: string | React.ReactNode;
}): React.JSX.Element {
  return (
    <h2
      className={cn(
        "max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans",
        className
      )}
    >
      {children}
    </h2>
  );
}
