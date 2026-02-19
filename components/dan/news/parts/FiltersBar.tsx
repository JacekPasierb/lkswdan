"use client";

import {Search} from "lucide-react";
import type {Category} from "../sections/NewsSection";
import Chip from "./Chip";

type Props = {
  categories: Category[];
  q: string;
  setQ: (v: string) => void;
  cat: Category;
  setCat: (v: Category) => void;
};

export default function FiltersBar({categories, q, setQ, cat, setCat}: Props) {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
              {c}
            </Chip>
          ))}
        </div>

        <div className="relative md:w-[340px]">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Szukaj: 30-lecie, zgrupowanie, kickboxing…"
            className="h-11 w-full rounded-2xl border border-white/10 bg-black/40 pl-11 pr-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25"
          />
        </div>
      </div>
    </div>
  );
}
