"use client";

import {motion} from "framer-motion";
import { easeOut } from "../../../../ui/EaseOut";

export default function IntroCard() {
  return (
    <motion.div
      initial={{opacity: 0, y: 18}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.25}}
      transition={{duration: 0.7, ease: easeOut}}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
    >
      <div className="text-xs tracking-[0.22em] text-white/60">FUNDAMENTY</div>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
        Ludzie. System. Konsekwencja.
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        Od lokalnych sekcji w Świdniku, przez obozy i starty, aż po rozwój
        szkolenia w wielu formułach. DAN to kultura treningu i progresu —
        budowana latami.
      </p>
    </motion.div>
  );
}
