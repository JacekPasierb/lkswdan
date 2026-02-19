"use client";

import React from "react";
import {Shield, Trophy, Users, Clock} from "lucide-react";
import { Stat } from "../../../../ui/Stat";

export default function StatsStrip() {
  return (
    <section className="relative py-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,40,40,0.10),rgba(0,0,0,0.0),rgba(255,215,90,0.08))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),rgba(0,0,0,0)_55%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={Users} value="200+" label="aktywnych zawodników" />
          <Stat icon={Clock} value="15 lat" label="doświadczenia" />
          <Stat icon={Trophy} value="50+" label="medali na turniejach" />
          <Stat icon={Shield} value="100%" label="zorientowane na progres" />
        </div>
      </div>
    </section>
  );
}
