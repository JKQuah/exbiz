import { AnimatedTooltipDemo } from "@/components/demo/AnimatedTooltipDemo";
import { DirectionAwareHoverDemo } from "@/components/demo/DirectionAwareHoverDemo";
import { GlowingEffectDemo } from "@/components/demo/GrowingEffectDemo";
import AppSubtitle from "@/components/elements/typography/subtitle";
import AppTitle from "@/components/elements/typography/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-container py-20 px-4 md:px-8 lg:px-10">
      <AppTitle>About Us</AppTitle>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        Startup has been established on the market for the past 2 years.
      </p>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="space-y-4">
          <AppTitle>Meet our Team</AppTitle>
          <AppSubtitle>
            Startup has been established on the market for the past 2 years.
          </AppSubtitle>

          <div className="!mt-16">
            <AnimatedTooltipDemo />
          </div>
        </div>

        <div className="col-span-2 order-first lg:order-2">
          <DirectionAwareHoverDemo />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJ1c2luZXNzfGVufDB8fDB8fHww"
          }
          alt="about-us-2"
          width={1000}
          height={1000}
          className="rounded-lg"
        />
        <div className="space-y-4">
          <AppTitle>Helping Startups Start Right</AppTitle>
          <AppSubtitle>
            We’re on a mission to simplify how startups in India get off the
            ground. From company registration to managing finances and
            compliance, we take care of the backend so you can focus on building
            your vision.
          </AppSubtitle>
          <AppSubtitle>
            Our team is made up of legal experts, chartered accountants, and
            startup advisors who understand the unique challenges of starting a
            business. Whether you&apos;re launching your first company or
            scaling your second, we bring the clarity, speed, and support you
            need.
          </AppSubtitle>

          <div>
            <Button
              className="bg-secondary w-40 font-bold"
              variant="secondary"
              role="button"
            >
              Talk With Us
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-8 block">
        <AppTitle>What Makes Us Different?</AppTitle>
        <GlowingEffectDemo />
      </div>
    </div>
  );
}
