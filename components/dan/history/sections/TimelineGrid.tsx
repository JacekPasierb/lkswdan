"use client";

import {motion} from "framer-motion";
import {Calendar} from "lucide-react";
import { timeline } from "../data";
import { easeOut } from "../../../../ui/EaseOut";


export default function TimelineGrid() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {timeline.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.6, delay: i * 0.05, ease: easeOut}}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
        >
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Calendar className="h-4 w-4" />
            {item.year}
          </div>

          <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>

          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
