"use client";

import {motion} from "framer-motion";
import {SectionHeader} from "../../../../ui/SectionHeader";
import {easeOut} from "../../../../ui/EaseOut";
import {items} from "../data";

export default function CommunitySection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SPOŁECZNOŚĆ"
          title="LKSW DAN – więcej niż tylko sport"
          desc="DAN to ludzie, relacje i wspólne cele. Trenujemy razem i rozwijamy się razem."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: easeOut,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <item.icon className="h-5 w-5 text-white/85" />
              </div>

              <div className="mt-4 text-lg font-extrabold text-white">
                {item.title}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-white/65">
          DAN to miejsce, w którym budujesz formę, charakter i relacje na lata.
        </div>
      </div>
    </section>
  );
}
