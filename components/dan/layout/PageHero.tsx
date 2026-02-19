"use client";

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowRight, ChevronRight} from "lucide-react";
import {cn} from "@/lib/cn";
import {easeOut} from "../../../ui/EaseOut";
import {GlowButton} from "../../../ui/GlowButton";
import ParticlesHero from "../home/sections/ParticlesHero";

type Crumb = {label: string; href?: string};

export default function PageHero({
  eyebrow = "LKSW DAN",
  title,
  desc,
  crumbs,
  primaryCta,
  secondaryCta,
  accent = "red",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  crumbs?: Crumb[];
  primaryCta?: {label: string; href: string};
  secondaryCta?: {label: string; href: string};
  accent?: "red" | "gold";
  align?: "left" | "center";
}) {
  const accentGlow =
    accent === "red"
      ? "bg-[radial-gradient(circle_at_30%_30%,rgba(255,40,40,0.22),transparent_55%)]"
      : "bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,90,0.18),transparent_55%)]";

  const accentLine =
    accent === "red"
      ? "from-red-500/35 via-red-500/0 to-transparent"
      : "from-amber-300/35 via-amber-300/0 to-transparent";

  return (
    <header className="relative isolate overflow-hidden pt-28 pb-14 sm:pb-16">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/team.jpg"
            alt="DAN Team"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* PARTICLES */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <ParticlesHero className="opacity-60" />
        </div>

        {/* GLOW */}
        <div className={cn("absolute inset-0 z-20 opacity-90", accentGlow)} />

        {/* RADIALS */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_60%)]" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.92))]" />

        {/* GRID */}
        <div className="absolute inset-0 z-20 opacity-20 [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {crumbs?.length ? (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/55">
            {crumbs.map((c, idx) => {
              const node = c.href ? (
                <Link
                  key={idx}
                  href={c.href}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 text-white/75"
                >
                  {c.label}
                </span>
              );

              return (
                <React.Fragment key={idx}>
                  {node}
                  {idx < crumbs.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        ) : null}

        <div
          className={cn(
            "grid gap-10 lg:grid-cols-12 lg:items-end",
            align === "center" && "text-center"
          )}
        >
          {/* ================= LEFT ================= */}
          <div
            className={cn(
              "lg:col-span-8",
              align === "center" && "lg:col-start-3"
            )}
          >
            <motion.div
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, ease: easeOut}}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur",
                align === "center" && "mx-auto"
              )}
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,40,40,0.55)]" />
              <span>{eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.85, delay: 0.05, ease: easeOut}}
              className="mt-6 text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-white">{title}</span>
            </motion.h1>

            {desc && (
              <motion.p
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.75, delay: 0.14, ease: easeOut}}
                className={cn(
                  "mt-5 max-w-3xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg",
                  align === "center" && "mx-auto"
                )}
              >
                {desc}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.75, delay: 0.22, ease: easeOut}}
                className={cn(
                  "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
                  align === "center" && "justify-center"
                )}
              >
                {primaryCta && (
                  <GlowButton variant="primary" href={primaryCta.href}>
                    {primaryCta.label}
                  </GlowButton>
                )}

                {secondaryCta && (
                  <GlowButton variant="secondary" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </GlowButton>
                )}
              </motion.div>
            )}
          </div>

          {/* ================= RIGHT ================= */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.85, delay: 0.12, ease: easeOut}}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div
                className={cn("absolute inset-0 bg-gradient-to-br", accentLine)}
              />

              <div className="relative">
                <div className="text-xs tracking-[0.22em] text-white/60">
                  SZYBKI SKRÓT
                </div>

                <div className="mt-2 text-lg font-black text-white">
                  Minimalizm. Maksymalny efekt.
                </div>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Spójny system szkolenia, grupy poziomami, możliwość startów w
                  różnych formułach.
                </p>

                <Link
                  href="/treningi#zapisy"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
                >
                  Zapisz się <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black" />
    </header>
  );
}
