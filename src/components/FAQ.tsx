import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is the AI-VERSE free?",
    answer: "Yes. It is a free to use for everyone.",
    value: "item-1",
  },
  {
    question: "What is AI-VERSE?",
    answer:
      "Imagine a powerful coding companion that helps you learn faster, understand concepts deeper, and practice coding in a realistic way. That's AI-VERSE! Visit our website to see how it can transform your coding journey.",
    value: "item-2",
  },
  {
    question:
      "What specific problems does AI-VERSE solve for coders",
    answer:
      "AI-VERSE can help in problems like #1.Struggling to understand complex code. #2.Difficulty in identifying errors and solutions. #3.Preperation for interview scenarios.",
    value: "item-3",
  },
  {
    question: "Is AI-VERSE suitable for beginners or more experienced coders?",
    answer: "AI-VERSE is designed for coders of all levels!  Beginners can leverage features like code generation and explanation, while experienced coders can benefit from code review, interview practice, and faster development.",
    value: "item-4",
  },
  {
    question:
      "Does AI-VERSE replace the need for human teachers?",
    answer:
      "AI-VERSE empowers both students and educators. It provides personalized learning experiences while freeing teachers for more focused guidance. Learn more about the perfect duo on our website!",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
