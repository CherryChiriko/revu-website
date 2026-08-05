// src/components/sections/FAQ.jsx
import SectionHeader from "../ui/SectionHeader";
import { Accordion, AccordionItem } from "../ui/Accordion";

const FAQS = [
  {
    question: "Is Revu only for Chinese?",
    answer:
      "No — standard flashcard decks work for any language. Stroke-order writing practice is specific to Chinese character (Hanzi) decks.",
    defaultOpen: true,
  },
  {
    question: "What happens to my streak if I miss a day?",
    answer:
      "If a deck has nothing due, that day is frozen rather than counted as a break. Streaks only reset when cards were available and genuinely went unstudied.",
  },
  {
    question: "Can I cancel Pro anytime?",
    answer:
      "Yes, from Settings → Account. You'll keep Pro features until the end of your current billing period, then drop back to Free — your decks and history stay intact.",
  },
  {
    question: "Can I import an existing Anki or Excel deck?",
    answer:
      "Yes. The import wizard maps CSV/Excel columns to fields and validates CJK characters before creating cards, on both Free and Pro.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeader
          eyebrow="Questions"
          title="Before you ask in the review queue"
        />

        <Accordion>
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              title={faq.question}
              defaultOpen={faq.defaultOpen}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
