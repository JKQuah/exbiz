import { Button } from "@/components/ui/button";
import React from "react";

export default function OutlineButton({
  children,
}: {
  children: string | React.ReactNode;
}): React.JSX.Element {
  return (
    <Button
      variant={"outline"}
      className="text-xl font-bold rounded-full p-6 md:p-8 bg-white border-primary text-primary z-10 hover:bg-primary hover:text-white w-full"
    >
      {children}
    </Button>
  );
}
