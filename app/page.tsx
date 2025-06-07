import AccordionTabsDemo from "@/components/demo/AccordionTabsDemo";
import { AnimatedTestimonialsDemo } from "@/components/demo/AnimatedTestimonialsDemo";
import { AppleCardsCarouselDemo } from "@/components/demo/AppleCardCarousel";
import { BackgroundLinesDemo } from "@/components/demo/BackgroundLinesDemo";
import AppImage from "@/components/elements/image/app-image";
import SetupBusinessSteps from "@/components/features/home/setup-business-steps";
import StatsCard from "@/components/features/stats/card";
import FloatingButton from "@/components/ui/floating-button";
import Link from "next/link";

export default function Home() {
  const phone = "601112354678";
  const message = "I am interested to signup a business plan with you.";

  return (
    <div>
      <BackgroundLinesDemo />
      <AppleCardsCarouselDemo />

      <SetupBusinessSteps />
      <StatsCard />

      <AnimatedTestimonialsDemo />
      <AccordionTabsDemo />

      <FloatingButton>
        <Link
          href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
          target="_blank"
        >
          <AppImage.Whatsapp
            width={40}
            height={40}
            className="!w-12 !h-12 text-white"
          />
        </Link>
      </FloatingButton>
    </div>
  );
}
