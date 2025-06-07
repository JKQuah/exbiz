import { TimelineDemo } from "@/components/demo/TimelineDemo";
import AppTitle from "@/components/elements/typography/title";

export default function HistoryPage() {
  return (
    <div className="max-container py-20 px-4 md:px-8 lg:px-10">
      <AppTitle>History</AppTitle>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        Startup has been established on the market for the past 2 years.
      </p>

      <TimelineDemo />
    </div>
  );
}
