"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Phone } from "lucide-react";
import GlyphPortal from "@/components/ui/glyph-portal";
import { CLINIC_INFO } from "@/lib/clinic-data";

const family = '"Glyph Portal Jakarta", Arial, sans-serif';
let fontLoad: Promise<void> | undefined;

export default function HomeHero() {
  const [face, setFace] = useState<string | null>(null);

  const phone = CLINIC_INFO.contact.phone;

  useEffect(() => {
    let settled = false;
    const finish = (value: string) => {
      if (!settled) {
        settled = true;
        setFace(value);
      }
    };

    fontLoad ??= new FontFace(
      "Glyph Portal Jakarta",
      'url("https://cdn.21st.dev/assets/mirror/15/153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79.woff2")',
      { weight: "100 900" }
    )
      .load()
      .then((font) => {
        document.fonts.add(font);
      });

    const timeout = window.setTimeout(() => finish("Arial, sans-serif"), 1600);
    void fontLoad.then(
      () => finish(family),
      () => finish("Arial, sans-serif")
    );

    return () => {
      settled = true;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      data-slipstream-demo
      className="-mt-[88px] sm:-mt-[100px] md:-mt-[112px] relative w-full bg-white border-b border-[#E5DFD2] overflow-clip"
      style={{
        width: "100%",
        containerType: "inline-size",
        fontFamily: face ?? "Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes heroImgZoom{
          from{transform:scale(1.0);}
          to{transform:scale(1.14);}
        }
        [data-hero-bg-img]{
          animation:heroImgZoom 12s ease-in-out infinite alternate;
          transform-origin:center center;
        }
        [data-slipstream-demo] [data-gp-caption]{
          inset:calc(var(--gp-word-bottom,50%) + 102px) 24px auto;
          justify-content:center;
        }
        [data-slipstream-demo] [data-gp-hint]{display:none;}
        [data-slipstream-demo] [data-gp-enter]{
          min-height:48px;
          padding:0 28px;
          gap:20px;
          background:#C9AD68;
          border:1px solid #080808;
          border-radius:9999px;
          color:#ffffff;
          font-size:14px;
          font-weight:600;
          letter-spacing:0.01em;
          box-shadow:0 6px 20px rgba(9,44,145,0.32);
          transition:all .2s ease;
        }
        [data-slipstream-demo] [data-gp-enter]:hover{
          background:#E0C785;
          box-shadow:0 8px 26px rgba(9,44,145,0.45);
          transform:translateY(-1px);
        }
        [data-slipstream-demo] [data-gp-enter]:focus-visible{
          outline:2px solid #080808;
          outline-offset:4px;
        }
        [data-slipstream-demo] [data-gp-touch-picker]{top:auto;bottom:18px;left:50%;}
        [data-slipstream-demo] [data-gp-select]{
          border:1px solid #E5DFD2;
          border-radius:8px;
          font-size:12px;
          color:#171717;
          background:#ffffff;
        }
        [data-ch-hero-header]{position:absolute;inset:clamp(24px,4.5cqw,48px) clamp(24px,5cqw,64px) auto;display:flex;align-items:center;justify-content:space-between;gap:20px;color:#171717;}
        [data-ch-hero-brand]{font-size:19px;font-weight:700;letter-spacing:-.045em;}
        [data-ch-hero-category]{font-size:12px;line-height:1.5;color:#686868;text-align:right;}
        [data-ch-hero-intro]{position:absolute;inset:auto 24px calc(100% - var(--gp-word-top,35%) + 32px);margin:0;max-width:none;text-align:center;color:#686868;font-size:13px;font-weight:500;line-height:1.5;letter-spacing:.01em;}
        [data-ch-hero-support]{position:absolute;inset:calc(var(--gp-word-bottom,50%) + 32px) 24px auto;margin:0 auto;max-width:42ch;text-align:center;color:#686868;font-size:16px;font-weight:400;line-height:1.5;text-wrap:balance;}
        [data-sublime-scroll]{position:absolute;inset:auto 24px 7%;text-align:center;color:#686868;font-size:11px;letter-spacing:.01em;}
        @media(any-pointer:coarse){[data-sublime-scroll]{bottom:12%;}}
        @media(any-pointer:coarse){[data-sublime-scroll]{bottom:13%;}}
        @container(max-width:450px){
          [data-ch-hero-category]{max-width:12ch;}
          [data-ch-hero-intro]{font-size:12px;}
          [data-ch-hero-support]{font-size:14px;}
          [data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 96px);}
        }
        @container(max-height:479px){
          [data-ch-hero-header]{top:18px;}
          [data-ch-hero-support]{top:calc(var(--gp-word-bottom,50%) + 16px);}
          [data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 78px);}
          [data-sublime-scroll]{display:none;}
        }
        [data-slipstream-demo] [data-gp-content]{
          padding:6rem clamp(1.25rem,5cqw,5rem) 6.5rem;
          font-family:inherit;
          background:#080808;
          color:#ffffff;
        }
        [data-slipstream-demo] section,[data-slipstream-demo] [data-gp-caption]{font-family:inherit;}
        [data-slipstream-copy]{
          display:flex;
          width:min(100%,80rem);
          margin:auto;
          flex-direction:column;
          align-items:flex-start;
          gap:clamp(2rem,5svh,3.5rem);
        }
        [data-slipstream-copy] h2{
          max-width:48rem;
          margin:0;
          color:#ffffff;
          font-size:clamp(1.75rem,1.1rem + 2.1cqw,2.4rem);
          font-weight:700;
          line-height:1.2;
          letter-spacing:-0.02em;
          text-wrap:balance;
        }
        [data-slipstream-features]{
          display:grid;
          width:100%;
          grid-template-columns:1fr;
          gap:1.75rem;
        }
        [data-slipstream-feature]{
          border-top:1px solid rgba(220,228,237,0.22);
          padding-top:1.1rem;
        }
        [data-slipstream-feature] h3{
          margin:0;
          color:#ffffff;
          font-size:1.125rem;
          font-weight:600;
          line-height:1.2;
          letter-spacing:0;
        }
        [data-slipstream-feature] p{
          margin:.55rem 0 0;
          color:#E5DFD2;
          font-size:.9375rem;
          line-height:1.55;
        }
        [data-slipstream-no]{
          display:inline-block;
          margin-right:.7rem;
          color:#C9AD68;
          font:700 .8125rem ui-monospace,monospace;
          letter-spacing:.08em;
          transform:translateY(-.1em);
        }
        @container(min-width:768px){
          [data-slipstream-features]{
            grid-template-columns:repeat(3,minmax(0,1fr));
            gap:3.5rem;
          }
        }
      `}</style>

      {face ? (
        <GlyphPortal
          word="Robustus Roofing"
          fontFamily={face}
          fontWeight={700}
          style={{
            fontFamily: face,
            "--gp-paper": "#FFFFFF",
            "--gp-ink": "#171717",
            "--gp-field": "#080808",
            "--gp-foreground": "#FFFFFF",
          }}
          scrollLength={2.2}
          interactive={true}
          annotations={false}
          enterLabel="Meet Robustus Roofing"
          underlay={
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/images/roofing-hero.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
                style={{ opacity: 0.2, transform: "scale(1.04)" }}
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.52)" }}
              />
            </div>
          }
          background={
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "scale(var(--gp-field-scale,1))",
              }}
            >
              {/* Roof repair photo inside the animated word */}
              <Image
                src="/images/roof-repair.png"
                alt=""
                fill
                className="object-cover object-center"
                style={{ opacity: 0.92 }}
              />
              {/* Dark gradient overlay for readability */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 18% 12%, rgba(255,75,11,0.28), transparent 38%), radial-gradient(circle at 82% 22%, rgba(18,30,40,0.35), transparent 32%), linear-gradient(135deg, rgba(11,20,28,0.94) 0%, rgba(11,20,28,0.9) 50%, rgba(11,20,28,0.96) 100%)",
                }}
              />
            </div>
          }
          front={
            <>
              <div data-ch-hero-header>
                <span data-ch-hero-brand>Robustus Roofing Limited</span>
                <span data-ch-hero-category>Auckland · New Zealand<br />Auckland and surrounding areas</span>
              </div>
              <p data-ch-hero-intro>Roof repairs and replacement roofing</p>
              <p data-ch-hero-support>
                Roof repairs, roof replacements and new build roofing in Auckland, New Zealand.
              </p>
              <span data-sublime-scroll>Scroll to explore ↓</span>
            </>
          }
        >
          <div data-slipstream-copy>
            <h2>
              Roofing work with care, skill and attention to detail.
            </h2>

            <div data-slipstream-features>
              <div data-slipstream-feature>
                <h3>
                  <span data-slipstream-no>01</span>
                  Roof repairs
                </h3>
                <p>
                  Repairs for leaks, storm damage, broken tiles and more.
                </p>
              </div>

              <div data-slipstream-feature>
                <h3>
                  <span data-slipstream-no>02</span>
                  New build roofing
                </h3>
                <p>
                  Roofing for new builds, delivered with care and a quality finish.
                </p>
              </div>

              <div data-slipstream-feature>
                <h3>
                  <span data-slipstream-no>03</span>
                  Roof replacement
                </h3>
                <p>
                  Roof replacement work with careful attention to detail.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="tel:+64223586401"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9AD68] px-7 font-body text-sm font-semibold text-[#080808] shadow-[0_6px_20px_rgba(8,8,8,0.18)] transition-all hover:bg-[#E0C785] hover:shadow-[0_8px_26px_rgba(9,44,145,0.45)]"
              >
                Call Robustus Roofing
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+64223586401"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 font-body text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <Phone size={15} className="text-[#E0C785]" />
                Call Robustus Roofing
              </a>
              <a
                href="#home-stats"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 font-body text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all"
              >
                <span>See customer reviews and services</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </GlyphPortal>
      ) : (
        <div
          role="status"
          style={{
            height: "80vh",
            display: "grid",
            placeItems: "center",
            color: "#171717",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Loading…
        </div>
      )}
    </div>
  );
}








