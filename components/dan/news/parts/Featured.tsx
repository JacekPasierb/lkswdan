"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { easeOut } from "../../../../ui/EaseOut";
import { Post } from "../posts";

function formatPL(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Featured({ post }: { post: Post }) {
  return (
    <motion.section
      aria-label="Wpis tygodnia"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur"
    >
      <div className="pointer-events-none absolute -inset-12 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,40,40,0.12),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,215,90,0.10),transparent_55%)]" />
      </div>

      <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:items-stretch">
        {/* cover */}
        <div className="lg:col-span-5">
          {post.cover ? (
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover object-center opacity-90"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/75" />
              </div>
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-between text-xs text-white/55">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatPL(post.date)}
            </span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* content */}
        <div className="lg:col-span-7 lg:flex lg:flex-col">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-white/60">
            WPIS TYGODNIA
          </div>

          <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
            {post.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 8).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href={`/news/${post.id}`}
              className="group inline-flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-white/90"
            >
              <span>Czytaj</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="#lista"
              className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/85 transition hover:border-white/25 hover:bg-white/10"
            >
              <span>Wszystkie wpisy</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
