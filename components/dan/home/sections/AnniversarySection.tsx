"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {Award, Calendar} from "lucide-react";
import { SectionHeader } from "../../../../ui/SectionHeader";
import { easeOut } from "../../../../ui/EaseOut";

export default function AnniversarySection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HISTORIA"
          title="30 lat tradycji i doświadczenia"
          desc="W 2024 roku LKSW DAN obchodził 30-lecie działalności."
        />

        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8, ease: easeOut}}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
        >
          {/* PHOTO BACKGROUND (inside card) */}
          <div className="absolute inset-0 -z-20">
            <Image
              src="/30lecie.jpg"
              alt="30-lecie LKSW DAN"
              fill
              priority={false}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Dark overlays for readability */}
          <div className="absolute inset-0 -z-10 bg-black/70" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/70 to-black/85" />

          {/* Glow */}
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.18),transparent_60%)]" />

          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Calendar className="h-4 w-4" />
                Od 1994 roku
              </div>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                Trzy dekady rozwoju
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                Przez 30 lat wychowaliśmy setki zawodników, trenerów i
                pasjonatów sportów walki. Budujemy charakter, dyscyplinę i
                pewność siebie — nie tylko na macie, ale i w życiu.
              </p>

              <p className="mt-4 text-sm text-white/65">
                Jubileusz 2024 był dla nas potwierdzeniem, że obrany kierunek
                jest właściwy — profesjonalizm, konsekwencja i pasja.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Award className="h-6 w-6 text-red-400" />
                <div className="mt-3 text-2xl font-black text-white">30+</div>
                <div className="text-xs text-white/60">Lat działalności</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Award className="h-6 w-6 text-red-400" />
                <div className="mt-3 text-2xl font-black text-white">1994</div>
                <div className="text-xs text-white/60">Rok założenia</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Award className="h-6 w-6 text-red-400" />
                <div className="mt-3 text-2xl font-black text-white">1000+</div>
                <div className="text-xs text-white/60">Wychowanków</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Award className="h-6 w-6 text-red-400" />
                <div className="mt-3 text-2xl font-black text-white">
                  Region
                </div>
                <div className="text-xs text-white/60">Lider szkolenia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
