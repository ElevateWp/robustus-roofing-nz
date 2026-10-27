import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import PanelWipe from '@/components/motion/PanelWipe';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { CLINIC_INFO, DENTISTS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About Robustus Roofing Limited',
  description:
    'Meet Robustus Roofing, a local roofing team serving Auckland and surrounding areas.',
  pathname: '/about/',
});

const TIMELINE = [
  {
    year: 'Auckland, New Zealand',
    title: 'Roofing services',
    description: 'Joshua and the team handle roof repairs, roof repairs, roof replacement and replacement roofing. Customers praise their skill, hard work and quality finish.',
  },
];

const APPROACH_STEPS = [
  {
    title: 'Inspection and advice',
    description: 'Joshua listens to what is happening and inspects the roof.',
  },
  {
    title: 'Clear quote',
    description: 'Discuss the work and project details before the job starts.',
  },
  {
    title: 'Quality workmanship',
    description: 'The team completes the agreed repairs with care.',
  },
  {
    title: 'Project updates',
    description: 'Joshua and the team work hard to complete the job with care.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'About us', path: '/about/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  About Robustus Roofing Limited
                </span>
                <WordRevealH1 text="Roof repairs and replacement roofing, with care and clear communication." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Robustus Roofing Limited provides roofing work in Auckland. Customer reviews praise Joshua and the team for their skill, attention to detail and quality workmanship." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Call</span>
                    <span className="font-medium text-forest">+64 22 358 6401</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <PanelWipe className="py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-2xl mb-16">
              <span className="font-body text-13 text-paper/60 uppercase tracking-wider block mb-2 font-medium">
                Our experience
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Local roofers, ready to help
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="relative border-l border-mist/30 pl-8 md:pl-12 space-y-12 max-w-3xl">
            {TIMELINE.map((item, idx) => (
              <AnimateOnScroll
                key={item.year}
                animation="fade-up"
                delay={idx * 0.1}
                className="relative"
              >
                {/* Year Marker */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-forest border-2 border-lime flex items-center justify-center" />
                <span className="font-display text-21 text-lime block mb-1">
                  {item.year}
                </span>
                <h3 className="font-display text-21 md:text-26 text-paper mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-15 text-paper/80 leading-relaxed">
                  {item.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </PanelWipe>

      {/* SECTION 3: How we work */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                How We Work
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                How we work
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {APPROACH_STEPS.map((step, idx) => (
              <AnimateOnScroll
                key={step.title}
                animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={idx * 0.1}
              >
                <div className="p-8 border border-mist bg-paper flex flex-col justify-between h-full hover:border-forest/40 transition-colors shadow-sm">
                  <div>
                    <span className="font-body text-13 text-forest block mb-3 font-medium">
                      Step 0{idx + 1}
                    </span>
                    <h3 className="font-display text-21 md:text-26 text-forest-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Joshua and the team */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Our team
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink">
                  Meet Joshua and the team
                </h2>
              </div>
              <Link
                href="/team/"
                className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
              >
                View Team Details →
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 max-w-sm mx-auto">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard key={dentist.id} dentist={dentist} offsetY={idx === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Roofing services Work */}
      <section className="py-20 md:py-32 border-b border-mist overflow-hidden">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Our services
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Roof repairs and replacement roofing
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                  Joshua can inspect your roof, explain the issue and discuss the right next steps.
                </p>
                <div className="space-y-2 font-body text-13 text-forest-ink/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>The scope and project details are agreed before work begins.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Careful workmanship and attention to detail</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.08} className="w-full h-full">
                    <Image
                      src="/images/roofing-hero.png"
                      alt="Roof repairs in progress"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                    Roofing service
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Illustrative Residential Images */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roofing projects
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Roofing and replacement roofing work
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AnimateOnScroll animation="zoom-in" delay={0.1}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/roof-repair.png"
                  alt="Roofing project"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Roofing project reference
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.2}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/roofb3-1.jpg"
                  alt="Roof repair project"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Roofing services
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.3}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/flat-roof.png"
                  alt="Roofing project"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Roof repair
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Request a quote
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Tell Joshua what you need
              </h2>
              <p className="font-body text-15 text-paper/80 mt-2 max-w-xl">
                Call Joshua to discuss the roofing work and check availability.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/request-a-quote/" variant="lime" size="lg">
                Request a quote
              </Button>
              <Button href="/contact/" variant="ghost-light" size="lg">
                Contact Joshua
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}









