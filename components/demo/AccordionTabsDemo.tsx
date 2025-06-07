import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AppTitle from "../elements/typography/title";

const items = [
  {
    title: "Can I register a company without a physical office?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "How long does the registration take?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "Is this service available in all Indian states?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function AccordionTabsDemo() {
  return (
    <div className="max-container mt-20 mx-4 md:mx-auto">
      <AppTitle className="text-center">Frequently Asked Question</AppTitle>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="max-w-2xl my-20 w-full space-y-2 mx-auto"
      >
        {items.map(({ title, content }, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none rounded-md px-4 data-[state=open]:bg-secondary py-4"
          >
            <AccordionTrigger className="data-[state=closed]:py-2 text-lg font-bold">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-base">{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
