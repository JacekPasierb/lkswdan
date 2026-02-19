"use client";

import React from "react";
import {motion} from "framer-motion";
import {why} from "../data";
import { SectionHeader } from "../../../../ui/SectionHeader";
import { easeOut } from "../../../../ui/EaseOut";

export default function WhySection() {
  return (
    <section id="dlaczego" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),rgba(0,0,0,0)_50%),radial-gradient(circle_at_80%_70%,rgba(255,40,40,0.10),rgba(0,0,0,0)_55%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DLACZEGO DAN"
          title="To nie jest zwykły klub. To system szkoleniowy, który buduje zawodników i charakter."
          desc="Minimalizm w formie. Maksymalna jakość w treningu — plan, progres i atmosfera, którą czujesz od pierwszego wejścia."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch my-10">
          {why.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.6, delay: i * 0.06, ease: easeOut}}
              className="group h-full"
            >
              <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-red-500/15 blur-3xl" />
                  <div className="absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-amber-300/10 blur-3xl" />
                </div>

                {/* content */}
                <div className="relative flex flex-col flex-1 items-center justify-center">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                    <c.icon className="h-5 w-5 text-white/85" />
                  </div>

                  <div className="mt-4 text-lg font-extrabold tracking-tight text-white text-center">
                    {c.title}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-white/70 text-center">
                    {c.desc}
                  </p>

                  {/* footer pinned to bottom */}
                  <div className="mt-auto pt-6 text-xs tracking-wide text-white/50">
                    Standard LKSW DAN
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
