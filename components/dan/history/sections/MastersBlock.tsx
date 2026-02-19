"use client";

import {Star} from "lucide-react";
import { masters } from "../data";


export default function MastersBlock() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
      <div className="text-xs tracking-[0.22em] text-white/60">SEMINARIA</div>

      <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
        Mistrzowie i instruktorzy
      </h3>

      <p className="mt-3 max-w-3xl text-sm text-white/70">
        Przez lata szkolili u nas instruktorzy światowej klasy. To oni dokładali
        cegły do jakości technicznej i mentalnej.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {masters.map((m) => (
          <div
            key={m}
            title={m}
            className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 transition hover:border-white/20 hover:bg-white/10"
          >
            <Star className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span className="block max-h-9 overflow-hidden">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
