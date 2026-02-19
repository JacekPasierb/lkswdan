"use client";

import {easeOut, motion} from "framer-motion";
import { values } from "../data";
import { SectionHeader } from "../../../../ui/SectionHeader";


export default function ValuesSection() {


  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DLACZEGO WARTO"
          title="Więcej niż trening"
          desc="W LKSW DAN rozwijasz ciało, umysł i charakter."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: i * 0.05, ease: easeOut}}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <item.icon className="h-6 w-6 text-white/80" />
              </div>

              <div className="mt-4 text-xl font-extrabold text-white">
                {item.title}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
