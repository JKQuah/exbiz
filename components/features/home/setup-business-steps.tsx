import { CoverDemo } from "@/components/demo/CoverDemo";
import { CalendarDays, Loader, ScrollText, Signature } from "lucide-react";

export default function SetupBusinessSteps() {
  const steps = [
    {
      icon: <CalendarDays size={40} />,
      title: "Schedule a Call",
      description:
        "Connect with our experts to discuss your business idea and choose the right legal structure.",
    },
    {
      icon: <ScrollText size={40} />,
      title: "Submit all Documents",
      description:
        "Share the necessary documents securely through our platform.",
    },
    {
      icon: <Loader size={40} />,
      title: "Wait for Approval",
      description:
        "We handle the filings, registrations, and legal formalities.",
    },
    {
      icon: <Signature size={40} />,
      title: "Complete & Launch",
      description:
        "Receive all legal documents and start operations confidently.",
    },
  ];
  return (
    <div className="max-container">
      <CoverDemo />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 my-20 p-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-col-center gap-4 text-center">
            <div className="rounded-full bg-primary/20 w-28 h-28 flex-row-center hover:scale-110">
              {step.icon}
            </div>
            <h3 className="font-bold text-xl">{step.title}</h3>
            <p className="text-gray-400 text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
