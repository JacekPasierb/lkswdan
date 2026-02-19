"use client";

import React from "react";
import {motion} from "framer-motion";

import { testimonials } from "../data";
import { SectionHeader } from "../../../../ui/SectionHeader";
import { easeOut } from "../../../../ui/EaseOut";
import { GlowButton } from "../../../../ui/GlowButton";
import { Testimonial } from "../../../../ui/Testimonial";

export default function TestimonialsSection() {
  

  return (
    <section id="opinie" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SOCIAL PROOF"
          title="Opinie, które robią robotę."
          desc="Ludzie zostają, bo widzą progres. I bo czują standard."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.65, delay: i * 0.05, ease: easeOut}}
            >
              <Testimonial {...t} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="text-xs tracking-[0.22em] text-white/60">
                REPUTACJA
              </div>
              <div className="mt-2 text-2xl font-black tracking-tight text-white">
                Trening premium, bez marketingowej ściemy.
              </div>
              <p className="mt-2 text-sm text-white/70">
                Jeśli chcesz zrobić formę i charakter — to jest miejsce.
              </p>
            </div>

            <div className="flex w-full gap-3 md:w-auto">
              <GlowButton variant="primary" href="#zapisy">
                Zapisz się
              </GlowButton>
              <GlowButton variant="secondary" href="#kontakt">
                Kontakt
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
