import { ArrowRight } from "lucide-react";
import {cn} from "@/lib/cn";

export function GlowButton({
  children,
  variant = "primary",
  href,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0";

  const primary =
    "bg-white text-black hover:bg-white/90 focus-visible:ring-white/40";

  const secondary =
    "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-white/30 hover:bg-white/10 focus-visible:ring-white/30";

  const inner = (
    <span className="relative inline-flex items-center gap-2">
      <span className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-r from-red-500/0 via-red-500/18 to-amber-300/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </span>
  );

  const cls = cn(base, variant === "primary" ? primary : secondary);

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return <button className={cls}>{inner}</button>;
}
