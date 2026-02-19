"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowRight, Calendar, Sparkles} from "lucide-react";
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

export default function PostCard({post}: {post: Post}) {
  const Icon = post.icon ?? Sparkles;

  return (
    <motion.div
      whileHover={{y: -6}}
      transition={{duration: 0.35, ease: easeOut}}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur"
    >
      <Link href={`/news/${post.id}`} className="block h-full">
        <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.20),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,215,90,0.12),transparent_55%)]" />
        </div>

        {/* Cover / Placeholder */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {post.cover ? (
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover object-center opacity-90 transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ) : (
            // ✅ PLACEHOLDER
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.15),transparent_60%)]" />

              <Sparkles className="h-10 w-10 text-red-400 mb-2" />

              <span className="text-xs tracking-[0.25em] font-semibold">
                AKTUALNOŚCI
              </span>

              <span className="mt-1 text-[11px] opacity-70">
                {post.category}
              </span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/80" />
        </div>

        <div
          className={`relative flex flex-col p-6 ${
            post.cover ? "pt-5" : ""
          }`}
        >
          {!post.cover ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/75">
              <Icon className="h-3.5 w-3.5" />
              {post.category}
            </div>
          ) : null}

          <h3 className="mt-4 text-xl font-black tracking-tight text-white">
            {post.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/65"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-between text-xs text-white/55">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatPL(post.date)}
              </span>
              <span className="text-white/50">{post.readTime}</span>
            </div>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/75">
              <span>Czytaj więcej</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
