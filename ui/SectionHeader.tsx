import {Sparkles} from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto py-4 max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="my-3 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {desc ? (
        <p className="mt-1 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
