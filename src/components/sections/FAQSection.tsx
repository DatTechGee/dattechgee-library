import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/shared/animations";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I access DatTechGee Library?",
    answer: "Create a free account, then browse or search the catalogue. Reader plan members get instant downloads of selected titles; Member plan unlocks unlimited access.",
  },
  {
    question: "What devices can I read on?",
    answer: "Any device with a browser â€” phone, tablet, laptop, desktop. Your library syncs across all of them automatically.",
  },
  {
    question: "How do payments work?",
    answer: "We accept Paystack, Flutterwave, and PayPal for instant, secure checkout. There are no hidden fees and you can cancel anytime.",
  },
  {
    question: "Can I download books for offline reading?",
    answer: "Yes. Member and Scholar plans support downloading titles in PDF, EPUB, and MOBI formats so you can keep reading even without an internet connection.",
  },
  {
    question: "Do you add new titles regularly?",
    answer: "Yes â€” our catalogue grows weekly, and members help decide which genres and authors we prioritise next.",
  },
  {
    question: "Can I request a book that's not in the library?",
    answer: "Absolutely. Use the Book Request form on the homepage to submit your request and we'll do our best to add it to our collection.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-xl border bg-card overflow-hidden transition-colors",
                    open && "border-primary/20"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    {open ? (
                      <Minus className="size-5 shrink-0 text-primary" />
                    ) : (
                      <Plus className="size-5 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-sm text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}