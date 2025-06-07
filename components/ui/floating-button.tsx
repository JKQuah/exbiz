"use client";

import React from "react";
import { Button } from "@/components/ui/button";

function FloatingButton({ children, ...props }: { children: React.ReactNode }) {
  return (
    <Button
      className="fixed bottom-8 right-8 sm:right-16 lg:right-40 rounded-full shadow-lg z-50 p-8 w-20 h-20"
      {...props}
    >
      {children}
    </Button>
  );
}

export default FloatingButton;
