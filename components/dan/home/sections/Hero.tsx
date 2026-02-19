"use client";

import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {Check, Shield, ArrowRight} from "lucide-react";
import ParticlesHero from "./ParticlesHero";
import { easeOut } from "../../../../ui/EaseOut";
import { GlowButton } from "../../../../ui/GlowButton";
import { GlassCard } from "../../../../ui/GlassCard";


export default function Hero() {
  const {scrollYProgress} = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <header className="relative isolate overflow-hidden py-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),rgba(0,0,0,0)_45%),radial-gradient(circle_at_80%_25%,rgba(255,40,40,0.18),rgba(0,0,0,0)_55%),radial-gradient(circle_at_55%_85%,rgba(255,215,90,0.10),rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.9))]" />

      <div className="absolute inset-0">
        <ParticlesHero className="opacity-90" />
      </div>

      <motion.div style={{y: parallax}} className="absolute inset-0 opacity-55">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.10),rgba(0,0,0,0)_55%)]" />
        <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />
        </div>
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pt-28 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, ease: easeOut}}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,40,40,0.6)]" />
              <span>LKSW DAN · SPORTY WALKI · REGION LUBLINA</span>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 22}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.9, delay: 0.08, ease: easeOut}}
              className="mt-6 text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="text-white">Siła.</span>{" "}
              <span className="bg-gradient-to-r from-white via-white to-white/55 bg-clip-text text-transparent">
                Dyscyplina.
              </span>{" "}
              <span className="bg-gradient-to-r from-red-500 via-amber-200 to-white bg-clip-text text-transparent">
                Charakter.
              </span>
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.18, ease: easeOut}}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Trenujesz w klubie, nie w „dyscyplinie z listy”. Trener dobiera
              plan pod grupę i poziom — technika, dynamika, kondycja, praca
              zadaniowa. Z czasem możesz startować w różnych formułach: we
              wszystkich albo w wybranych.
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.26, ease: easeOut}}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <GlowButton variant="primary" href="/recruitment">
                Formularz Zgłoszeniowy
              </GlowButton>
              <GlowButton variant="secondary" href="/trainings#grafik">
                Sprawdź grafik
              </GlowButton>

              <div className="mt-3 flex items-center gap-4 text-xs text-white/60 sm:mt-0 sm:ml-3">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" /> Plan wejścia
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" /> Grupy poziomami
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1.0, delay: 0.35, ease: easeOut}}
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                ["Taekwon-do", "Technika + dyscyplina"],
                ["Kickboxing", "Dynamika + kontrola"],
                ["Kondycja", "Wytrzymałość + forma"],
                ["Starty", "Różne formuły (pełny lub wybór)"],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
                >
                  <div className="text-sm font-extrabold tracking-tight text-white">
                    {t}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{d}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.9, delay: 0.12, ease: easeOut}}
              className="relative"
            >
              <div className="absolute -inset-10 -z-10 opacity-60 blur-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,40,40,0.25),rgba(0,0,0,0)_55%)]" />
              </div>

              <GlassCard className="p-0">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0)_40%),radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.20),rgba(0,0,0,0)_55%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]" />

                  <div className="relative p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs tracking-[0.22em] text-white/60">
                          START W KLUBIE
                        </div>
                        <div className="mt-2 text-2xl font-black tracking-tight text-white">
                          Po prostu przyjdź.
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          Trener dobierze grupę i poziom. Ty robisz pierwszy krok —
                          resztę dowiezie system.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] tracking-[0.18em] text-white/70">
                        DAN
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold text-white">
                            Trening próbny
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/60">
                            START
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-white/65">
                          Przyjdź na salę · Trener dobiera grupę · Dostajesz plan
                          wejścia. Rozwijaj się, trenuj dla siebie, startuj w licznych Turniejach - przygotowuj się do nowych wyzwań!
                        </div>
                      </div>

                      <a
                        href="/recruitment"
                        className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/85 transition hover:border-white/25 hover:bg-white/10"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Formularz Zgłoszeniowy
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black" />
    </header>
  );
}
