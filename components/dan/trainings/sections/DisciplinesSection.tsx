"use client";

import React from "react";
import { SectionHeader } from "../../../../ui/SectionHeader";
import { DisciplineTile } from "../../../../ui/DisciplineTile";



export default function DisciplinesSection() {
  return (
    <section id="dyscypliny" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="DYSCYPLINY"
              title="Taekwon-do & Kickboxing"
              desc="Dwa filary DAN: tradycyjna dyscyplina i nowoczesna dynamika walki."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="text-xs tracking-[0.22em] text-white/60">
                SYSTEM TRENINGU
              </div>
              <div className="mt-3 text-2xl font-black tracking-tight text-white">
                Minimalizm w UI. Maksymalizm w jakości.
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Każdy blok jest zbudowany jak produkt premium: rozgrzewka,
                technika, zadania, sparing i chłodzenie — wszystko ma cel.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Beginner friendly",
                  "Bezpieczne wejście",
                  "Progres tygodniowy",
                  "Sparing kontrolowany",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* TAEKWON-DO */}
          <DisciplineTile
            title="Taekwon-do"
            subtitle="Tradycja, technika i dyscyplina. Fundament charakteru, precyzja ruchu i rozwój mentalny."
            accent="gold"
          />

          {/* KICKBOXING */}
          <DisciplineTile
            title="Kickboxing"
            subtitle="Dynamika, moc i kondycja. Praca kombinacyjna, tempo walki i realna skuteczność."
            accent="red"
          />
        </div>
      </div>
    </section>
  );
}
