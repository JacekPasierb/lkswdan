"use client";

import React from "react";
import {motion} from "framer-motion";
import {ArrowRight } from "lucide-react";
import { easeOut } from "../../../ui/EaseOut";

export default function RecruitmentForm() {
  return (
    <section id="formularz" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.10),rgba(0,0,0,0)_55%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, ease: easeOut}}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-10 backdrop-blur"
        >
          {/* INTRO */}
          <div>
            <div className="text-xs tracking-[0.22em] text-white/60">
              REKRUTACJA
            </div>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
              Formularz zapisu dziecka
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Prosimy o dokładne wypełnienie danych i zwrócenie uwagi na
              poprawność daty urodzenia, adresu email i telefonu.
              <br />
              <span className="font-semibold text-white">UWAGA:</span> prosimy o
              uważny wybór miejscowości i grupy treningowej.
            </p>
          </div>

          {/* FORM */}
          <form
            className="mt-10 grid gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo – podłącz API / MongoDB.");
            }}
          >
            {/* WYBÓR GRUPY */}
            <div>
              <h3 className="text-sm font-semibold text-white/80">
                Wybór grupy
              </h3>

              <select
                required
                className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none focus:border-white/25"
              >
                <option value="">-- wybierz grupę --</option>
                <option>Taekwon-do dzieci młodsze</option>
                <option>Taekwon-do dzieci starsze</option>
                <option>Kickboxing</option>
              </select>
            </div>

            {/* DANE DZIECKA */}
            <div>
              <h3 className="text-sm font-semibold text-white/80">
                Dane dziecka
              </h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input required placeholder="Imię" className="input" />
                <input required placeholder="Nazwisko" className="input" />
                <input required type="date" className="input" />
                <input
                  required
                  placeholder="Adres zamieszkania"
                  className="input"
                />
                <input placeholder="Szkoła" className="input sm:col-span-2" />
              </div>
            </div>

            {/* DANE RODZICA */}
            <div>
              <h3 className="text-sm font-semibold text-white/80">
                Dane rodzica
              </h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input required placeholder="Imię" className="input" />
                <input required placeholder="Nazwisko" className="input" />
                <input
                  required
                  type="email"
                  placeholder="Adres e-mail"
                  className="input"
                />
                <input
                  required
                  type="tel"
                  placeholder="Telefon"
                  className="input"
                />
              </div>
            </div>

            {/* DRUGI RODZIC */}
            <div>
              <h3 className="text-sm font-semibold text-white/80">
                Dane drugiego rodzica (opcjonalne)
              </h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input placeholder="Imię" className="input" />
                <input placeholder="Nazwisko" className="input" />
                <input
                  type="email"
                  placeholder="Adres e-mail"
                  className="input"
                />
                <input type="tel" placeholder="Telefon" className="input" />
              </div>
            </div>

            {/* CHECKBOXY */}
            <div className="grid gap-3 text-sm text-white/75">
              {[
                "Zapoznałem/am się i akceptuję regulamin zajęć",
                "Wyrażam zgodę na przetwarzanie moich danych osobowych (RODO)",
                "Zapoznałem/am się i akceptuję Standardy Ochrony Małoletnich",
              ].map((label) => (
                <label
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <input type="checkbox" required className="mt-1" />
                  <span>{label}</span>
                </label>
              ))}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Wyślij zgłoszenie
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* STYLE REUSABLE INPUT */}
      <style jsx>{`
        .input {
          height: 48px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.4);
          padding: 0 16px;
          font-size: 14px;
          color: white;
          outline: none;
          transition: border 0.2s ease;
        }

        .input:focus {
          border-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}
