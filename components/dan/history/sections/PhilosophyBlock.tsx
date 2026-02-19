"use client";

import {Award, Shield} from "lucide-react";

export default function PhilosophyBlock() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur">
      <Shield className="h-7 w-7 text-red-400" />

      <h3 className="mt-4 text-2xl font-black">Filozofia rozwoju</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
        Nie zamykamy się w jednym stylu. Trenujesz w klubie — trener dobiera
        plan pod grupę i poziom. Starty są możliwe w różnych formułach: we
        wszystkich albo w wybranych.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Otwartość na style",
          "Bezpieczeństwo",
          "Długofalowy progres",
          "Kultura treningu",
        ].map((x) => (
          <div
            key={x}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75"
          >
            <Award className="h-4 w-4" />
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
