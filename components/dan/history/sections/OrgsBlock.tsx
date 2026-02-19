"use client";

import {Globe} from "lucide-react";
import { orgs } from "../data";


export default function OrgsBlock() {
  return (
    <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
      <div className="flex items-center gap-3">
        <Globe className="h-6 w-6 text-white/70" />
        <h3 className="text-2xl font-black">Organizacje i federacje</h3>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {orgs.map((o) => (
          <div
            key={o}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
          >
            {o}
          </div>
        ))}
      </div>
    </div>
  );
}
