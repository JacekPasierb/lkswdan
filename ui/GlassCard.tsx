"use client";

import React from "react";
import {Shield} from "lucide-react";
import {motion} from "framer-motion";
import {easeOut} from "./EaseOut";
import {cn} from "@/lib/cn";
import Image from "next/image";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:opacity-60",
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}

export function RevealCard({
  name,
  role,
  phone,
  image,
  tags,
  className,
}: {
  name: string;
  role: string;
  phone: string;
  image: string;
  tags: string[];
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{y: -6}}
      transition={{duration: 0.35, ease: easeOut}}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        className
      )}
    >
      {/* PHOTO */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),rgba(255,255,255,0)_50%),radial-gradient(circle_at_70%_70%,rgba(255,40,40,0.14),rgba(0,0,0,0)_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/85" />

        {/* REVEAL PANEL */}
        <div className="absolute inset-x-0 bottom-0 translate-y-10 px-5 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-white">{name}</div>
                <div className="mt-1 text-xs tracking-wide text-white/65">
                  {role}
                </div>
                <div className="mt-2 text-xs text-white/70">📞 {phone}</div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/70">
                COACH
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="p-5">
        <div className="text-base font-bold text-white">{name}</div>
        <div className="mt-1 text-sm text-white/65">{role}</div>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

        <div className="mt-4 flex items-center justify-between text-xs text-white/60">
          <span>Profesjonalny sztab</span>
          <span className="inline-flex items-center gap-1">
            <Shield className="h-3.5 w-3.5" />
            Licencje
          </span>
        </div>
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,40,40,0.22),rgba(0,0,0,0)_55%)]" />
      </div>
    </motion.div>
  );
}
