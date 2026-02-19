"use client";

import {motion} from "framer-motion";
import {Trophy} from "lucide-react";
import { easeOut } from "../../../../ui/EaseOut";

export default function ClosingBlock() {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.25}}
      transition={{duration: 1, ease: easeOut}}
      className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-black via-white/[0.03] to-black p-10 text-center backdrop-blur"
    >
      <Trophy className="mx-auto h-8 w-8 text-red-400" />
      <h3 className="mt-4 text-3xl font-black">
        Historia, która buduje przyszłość
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
        LKSW DAN to system — oparty na tradycji, ale nastawiony na rozwój
        kolejnych pokoleń.
      </p>
    </motion.div>
  );
}
