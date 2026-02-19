"use client";

import React from "react";
import Link from "next/link";
import {Calendar, Phone} from "lucide-react";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between gap-3">
            {/* LOGO */}
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <Image
                  src="/dan-wektor.png"
                  alt="LKSW DAN logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </span>

              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight text-white">
                  DAN
                </div>
                <div className="text-[10px] tracking-[0.24em] text-white/55">
                  LKSW DAN · LUBLIN
                </div>
              </div>

              <span className="ml-2 hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/60 sm:inline-flex">
                2026 EDITION
              </span>
            </Link>

            {/* MENU */}
            <div className="hidden items-center gap-6 md:flex">
              {[
                ["Start", "/"],
                ["Dlaczego", "/#dlaczego"],
                ["Trenerzy", "/trainers"],
                ["Aktualności", "/news"],
                ["Historia", "/historia"],

                ["Kontakt", "/#kontakt"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs font-semibold tracking-wide text-white/70 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <Link
                href="/trainings#grafik"
                className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/90"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Treningi
              </Link>

              <a
                href="tel:+48602351585"
                className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/10 sm:inline-flex"
                aria-label="Zadzwoń: +48 602 351 585"
              >
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
