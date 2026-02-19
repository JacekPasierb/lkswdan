"use client";

import React from "react";
import Image from "next/image";
import {
  Check,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="relative overflow-hidden border-t border-white/10 py-20 text-white"
    >
      {/* BACKGROUND PHOTO */}
      <div className="absolute inset-0 -z-46">
        <Image
          src="/30lecie.png"
          alt="LKSW DAN – 30-lecie"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* overlays */}
      <div className="absolute inset-0 -z-47 bg-black/75" />
      <div className="absolute inset-0 -z-48 bg-gradient-to-b from-black/50 via-black/75 to-black/90" />
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,40,40,0.12),rgba(0,0,0,0)_55%),radial-gradient(circle_at_80%_60%,rgba(255,215,90,0.10),rgba(0,0,0,0)_55%)]" />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP (logo + opis) */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/dan-wektor.png"
                alt="LKSW DAN logo"
                width={34}
                height={34}
                className="object-contain"
                priority
              />
            </span>

            <div>
              <div className="text-base font-extrabold tracking-tight">DAN</div>
              <div className="text-[10px] tracking-[0.24em] text-white/55">
                LKSW DAN · LUBLIN
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Premium klub sportów walki. Profesjonalizm, siła i dyscyplina. Zrób
            pierwszy krok — my dowieziemy resztę.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/85 transition hover:border-white/25 hover:bg-white/10"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/85 transition hover:border-white/25 hover:bg-white/10"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* KARTY POD SPODem (kontakt + jak dołączyć) */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* CONTACT */}
          <div className="  p-6 ">
            <div className="text-xs tracking-[0.22em] text-white/65">
              KONTAKT
            </div>

            <div className="mt-4 grid gap-3 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a className="hover:underline" href="tel:+48602351585">
                  +48 602 351 585
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a className="hover:underline" href="mailto:lkswdan@gmail.com">
                  lkswdan@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lublin · (adres do uzupełnienia)</span>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="  p-6 ">
            <div className="text-xs tracking-[0.22em] text-white/65">
              JAK DOŁĄCZYĆ
            </div>

            <div className="mt-3 text-2xl font-black tracking-tight">
              Po prostu przyjdź na trening.
            </div>

            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Wystarczy, że wpadniesz na
              zajęcia albo zadzwonisz — powiemy Ci, do której grupy dołączyć i
              co zabrać.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Trening próbny: wchodzisz i trenujesz",
                "Grupy dla początkujących i zaawansowanych",
                "Bezpieczeństwo i zasady sparingu",
                "Wsparcie trenerów od pierwszego dnia",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/80"
                >
                  <Check className="h-4 w-4" />
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-white/55">
            © {new Date().getFullYear()} DAN Fight Club · Lublin
          </div>

          <div className="text-xs text-white/55">
            Projekt i realizacja:{" "}
            <a
              href="https://pasierb-webstudio.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              aria-label="Jacek Pasierb – profil LinkedIn"
            >
              Jacek Pasierb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
