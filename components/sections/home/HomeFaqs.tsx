import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'What roofing services do you provide?',
    answer: 'The team handles roof repairs, roof replacements and roofing for new builds.',
    relatedLink: { href: '/services/', label: 'Explore roofing services →' },
  },
  {
    question: 'Which areas does Robustus Roofing service?',
    answer: 'Robustus Roofing is based in Auckland, New Zealand. Call the team to discuss your location.',
    relatedLink: { href: '/contact/', label: 'Talk to Joshua →' },
  },
  {
    question: 'What types of roof repair do you do?',
    answer: 'Joshua and the team handle roof repairs and replacement roofing. Contact them to discuss your project.',
    relatedLink: { href: '/roof-repairs/', label: 'Explore services →' },
  },
  {
    question: 'How do I request a quote?',
    answer: `Call Robustus Roofing at ${CLINIC_INFO.contact.phone} or use the quote form.`,
    relatedLink: { href: '/request-a-quote/', label: 'Request a quote →' },
  },
  {
    question: 'How do I check availability?',
    answer: `Call Robustus Roofing at ${CLINIC_INFO.contact.phone} to discuss your property and check availability.`,
    relatedLink: { href: '/contact/', label: 'Talk to Joshua →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Frequently asked questions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Questions about your roof
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Saiba mais sobre serviços, orçamentos e disponibilidade de atendimento.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Ficou com alguma dúvida?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Call Robustus Roofing or send an enquiry to discuss your project.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Call Robustus Roofing at
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}











