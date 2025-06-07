import { Button } from "@/components/ui/button";
import React from "react";

export default function DefaultButton({
  children,
}: {
  children: string | React.ReactNode;
}): React.JSX.Element {
  return (
    <Button className="text-xl font-bold rounded-full p-6 md:p-8 bg-primary text-white hover:bg-white z-10 hover:text-primary hover:border-primary hover:border">
      {children}
    </Button>
  );
}
