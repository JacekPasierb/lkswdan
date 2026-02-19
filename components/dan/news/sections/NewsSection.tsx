"use client";

import React, {useMemo, useState} from "react";
import {motion} from "framer-motion";


import Featured from "../parts/Featured";
import PostCard from "../parts/PostCard";
import FiltersBar from "../parts/FiltersBar";
import {easeOut} from "../../../../ui/EaseOut";
import { posts } from "../posts";

export type Category =
  | "Wszystkie"
  | "Zgrupowania"
  | "Wydarzenia"
  | "Społeczność"
  | "Nowe zajęcia"
  | "Sukcesy";

// ✅ TO DODAJEMY (było brak)
const categories: Category[] = [
  "Wszystkie",
  "Zgrupowania",
  "Wydarzenia",
  "Społeczność",
  "Nowe zajęcia",
  "Sukcesy",
];

export default function NewsSection() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category>("Wszystkie");

  const featured = useMemo(
    () => posts.find((p) => p.highlight) ?? posts[0],
    []
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return posts
      .filter((p) => (cat === "Wszystkie" ? true : p.category === cat))
      .filter((p) => {
        if (!query) return true;
        const hay = `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase();
        return hay.includes(query);
      })
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [q, cat]);

  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.06),rgba(0,0,0,0)_55%),radial-gradient(circle_at_85%_70%,rgba(255,40,40,0.10),rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Featured post={featured} />

        <FiltersBar
          categories={categories}
          q={q}
          setQ={setQ}
          cat={cat}
          setCat={setCat}
        />

        <div
          id="lista"
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.55, delay: i * 0.04, ease: easeOut}}
              className="h-full"
            >
              <PostCard post={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
