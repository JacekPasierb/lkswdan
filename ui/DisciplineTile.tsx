import {motion} from "framer-motion";
import { easeOut } from "./EaseOut";
import { ArrowRight } from "lucide-react";
import {cn} from "@/lib/cn";


export function DisciplineTile({
  title,
  subtitle,
  accent = "red",
}: {
  title: string;
  subtitle: string;
  accent?: "red" | "gold";
}) {
  const accentClass =
    accent === "red"
      ? "from-red-500/25 via-red-500/0 to-transparent"
      : "from-amber-300/25 via-amber-300/0 to-transparent";

  return (
    <motion.a
      href="#zapisy"
      whileHover={{y: -8}}
      transition={{duration: 0.35, ease: easeOut}}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", accentClass)} />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-white/60">
          DYSCYPLINA
        </div>

        <div className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
          {title}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/70">{subtitle}</p>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
          <span>Wejdź na matę</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/60">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            Technika
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            Kondycja
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.0),rgba(255,255,255,0.08),rgba(255,255,255,0.0))]" />
      </div>
    </motion.a>
  );
}
