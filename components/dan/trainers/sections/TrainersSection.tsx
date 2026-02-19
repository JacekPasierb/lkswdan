"use client";

import React from "react";
import {motion} from "framer-motion";
import {Check} from "lucide-react";
import {trainers} from "../data";
import { SectionHeader } from "../../../../ui/SectionHeader";
import { easeOut } from "../../../../ui/EaseOut";
import { RevealCard } from "../../../../ui/GlassCard";

export default function TrainersSection() {
  return (
    <section id="trenerzy" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(255,255,255,0.06),rgba(0,0,0,0)_55%),radial-gradient(circle_at_80%_60%,rgba(255,40,40,0.10),rgba(0,0,0,0)_55%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TRENERZY"
          title="Sztab, który prowadzi. Nie tylko motywuje."
          desc="Minimalistyczne karty, ale mocny efekt: kwalifikacje, plan i odpowiedzialność."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.7, delay: i * 0.06, ease: easeOut}}
            >
              <RevealCard
                name={t.name}
                role={t.role}
                phone={t.phone}
                image={t.image}
                tags={t.tags}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="text-xs tracking-[0.22em] text-white/60">
                METODYKA
              </div>
              <div className="mt-3 text-2xl font-black tracking-tight text-white">
                Trening to produkt. Musi działać.
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                U Ciebie nie ma zgadywania. Dostajesz progres, mierzalność i
                feedback. A jak chcesz startować — robimy to z głową.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Wejście dla początkujących",
                  "Technika i kontrola",
                  "Sparing z zasadami",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/75"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4" /> {x}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-xs tracking-[0.22em] text-white/60">
                  STANDARD
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/60">
                  PREMIUM
                </span>
              </div>
              <div className="mt-3 text-2xl font-black tracking-tight text-white">
                Sala, klimat, energia.
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Wchodzisz i czujesz profesjonalizm. Minimalizm, czystość, tempo.
                Zero przypadkowej atmosfery.
              </p>
              <a
                href="#zapisy"
                className="mt-6 inline-flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-white/90"
              >
                <span>Dołącz teraz</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
