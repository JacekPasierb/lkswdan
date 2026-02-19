import { Trophy } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function Testimonial({
  quote,
  name,
  meta,
}: {
  quote: string;
  name: string;
  meta: string;
}) {
  return (
    <GlassCard className="group transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm font-semibold text-white">{name}</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/60">
          OPINIA
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/75">“{quote}”</p>

      <div className="mt-4 text-xs text-white/55">{meta}</div>

      <div className="mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

      <div className="mt-4 flex items-center justify-between text-xs text-white/60">
        <span className="inline-flex items-center gap-1">
          <Trophy className="h-3.5 w-3.5" />
          Zaufanie
        </span>
        <span className="opacity-70 transition-opacity group-hover:opacity-100">
          ★★★★★
        </span>
      </div>
    </GlassCard>
  );
}
