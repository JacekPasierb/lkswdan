import type { LucideIcon } from "lucide-react";

export function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
          <Icon className="h-5 w-5 text-white/80" />
        </div>
        <div>
          <div className="text-2xl font-black tracking-tight text-white">
            {value}
          </div>
          <div className="text-xs tracking-wide text-white/60">{label}</div>
        </div>
      </div>
    </div>
  );
}
