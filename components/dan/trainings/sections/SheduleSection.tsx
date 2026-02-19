"use client";

import React, {useMemo, useState} from "react";
import {SectionHeader} from "../../../../ui/SectionHeader";
import {MapPin} from "lucide-react";
import {cn} from "@/lib/cn";

type ScheduleItem = {
  group: string;
  days: string;
  time: string;
};

type LocationSchedule = {
  key: "leczna" | "swidnik" | "milejow";
  label: string;
  season?: string;
  place: string;
  address: string;
  items: ScheduleItem[];
};

const SCHEDULE: LocationSchedule[] = [
  {
    key: "leczna",
    label: "ŁĘCZNA",
    season: "Sezon 2024/25",
    place: "Zespół Szkół Górniczych",
    address: "ul. Bogdanowicza",
    items: [
      {group: "Grupa młodsza", days: "Wt, Czw", time: "16:00 – 17:00"},
      {group: "Grupa średnia", days: "Wt, Czw", time: "17:00 – 18:00"},
      {group: "Grupa starsza", days: "Wt, Czw", time: "18:00 – 19:30"},
    ],
  },
  {
    key: "swidnik",
    label: "ŚWIDNIK",
    place: "Dojang Świdnik",
    address: "ul. Kardynała Stefana Wyszyńskiego 14, I piętro (nad RTV AGD)",
    items: [
      {group: "Grupa dziecięca A", days: "Wt, Czw", time: "16:30 – 17:15"},
      {group: "Grupa dziecięca B", days: "Wt, Czw", time: "17:15 – 18:15"},
      {group: "Grupa dziecięca C", days: "Wt, Czw", time: "18:15 – 19:15"},
      {group: "Grupa dziecięca D", days: "Wt, Czw", time: "19:15 – 20:30"},
      {
        group: "Młodzieżowa Kickboxing",
        days: "Pon, Śr",
        time: "17:00 – 18:30",
      },
      {
        group: "Zawodnicza starsza Kickboxing/Taekwon-do",
        days: "Pon, Śr, Pt",
        time: "18:30 – 20:00 (Pt także 17:30 – 19:30)",
      },
      {group: "Taekwon-do — klasyka", days: "Pt", time: "17:00 – 18:30"},
      {
        group: "Rekreacyjna dla dorosłych Masters",
        days: "Pon, Śr",
        time: "20:00 – 21:00",
      },
    ],
  },
  {
    key: "milejow",
    label: "MILEJÓW",
    place: "Szkoła Podstawowa w Milejowie",
    address: "Poniedziałki, środy",
    items: [
      {group: "Grupa młodsza", days: "Pon, Śr", time: "17:00 – 18:00"},
      {group: "Grupa starsza", days: "Pon, Śr", time: "17:30 – 19:00"},
    ],
  },
];

function Chip({
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
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-xs font-semibold transition",
        "backdrop-blur",
        active
          ? "border-white/25 bg-white text-black"
          : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
}

export default function ScheduleSection() {
  const [active, setActive] = useState<LocationSchedule["key"]>("leczna");

  const current = useMemo(
    () => SCHEDULE.find((x) => x.key === active) ?? SCHEDULE[0],
    [active]
  );

  return (
    <section id="grafik" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.06),rgba(0,0,0,0)_55%),radial-gradient(circle_at_85%_70%,rgba(255,40,40,0.10),rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="GRAFIK"
              title="Wybierz lokalizację i grupę."
              desc="Nie ma formularza zapisów — po prostu przyjdź na trening albo zadzwoń, a dobierzemy Cię do odpowiedniej grupy."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {SCHEDULE.map((x) => (
                <Chip
                  key={x.key}
                  active={x.key === active}
                  onClick={() => setActive(x.key)}
                >
                  {x.label}
                </Chip>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="text-xs tracking-[0.22em] text-white/60">
                {current.season ?? "LOKALIZACJA"}
              </div>

              <div className="mt-3 text-xl font-black tracking-tight text-white">
                {current.place}
              </div>

              <div className="mt-2 flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 text-white/60" />
                <span>{current.address}</span>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

            

              
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs tracking-[0.22em] text-white/60">
                    {current.label}
                  </div>
                  <div className="mt-2 text-2xl font-black tracking-tight text-white">
                    Grupy i godziny
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Przyjdź 10–15 minut wcześniej. Trener pomoże wejść w system
                    i dobierze poziom.
                  </p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] tracking-[0.18em] text-white/60">
                  LIVE
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {current.items.map((it) => (
                  <div
                    key={`${it.group}-${it.time}`}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {it.group}
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        {it.days}
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-white/80 sm:text-sm">
                      {it.time}
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
