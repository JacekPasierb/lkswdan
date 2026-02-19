"use client";

import React from "react";
import {SectionHeader} from "../../../../ui/SectionHeader";

export default function ScheduleSignupSection() {
  return (
    <section id="grafik" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%),linear-gradient(180deg,rgba(0,0,0,0.0),rgba(0,0,0,0.85))]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="GRAFIK"
              title="Zobacz tempo tygodnia."
              desc="Poniżej przykładowy układ (do podmiany realnym grafikiem)."
            />

            <div className="grid gap-3">
              {[
                ["Pon · 18:00", "Boks – technika"],
                ["Wt · 19:00", "Kickboxing – kombinacje"],
                ["Śr · 18:30", "BJJ – fundamentals"],
                ["Czw · 19:00", "MMA – łączenia"],
                ["Pt · 18:00", "Sparing kontrolowany"],
              ].map(([time, label]) => (
                <div
                  key={time}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur"
                >
                  <div className="text-sm font-semibold text-white">
                    {label}
                  </div>
                  <div className="text-xs text-white/60">{time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
