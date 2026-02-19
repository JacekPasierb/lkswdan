"use client";

import React from "react";
import {Tag} from "lucide-react";
import {cn} from "@/lib/cn";

export default function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition",
        active
          ? "border-white/25 bg-white/10 text-white"
          : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/10"
      )}
    >
      <Tag className="h-3.5 w-3.5 opacity-70" />
      {children}
    </button>
  );
}
