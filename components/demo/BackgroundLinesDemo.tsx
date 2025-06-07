"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import DefaultButton from "@/components/elements/button/default";
import OutlineButton from "@/components/elements/button/outline";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mt-16">
        Launch Your Startup, <br /> with Confidence
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        From legal registration to accounting and finance <br />
        we handle the boring stuff so you can focus on growth
      </p>

      <div className="flex-col-between md:flex-row-between mt-8 gap-8">
        <DefaultButton>Book a Free Consultation</DefaultButton>
        <OutlineButton>Get Started Now</OutlineButton>
      </div>
    </BackgroundLines>
  );
}
