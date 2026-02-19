"use client";

import {motion} from "framer-motion";
import {MapPin} from "lucide-react";
import { locations } from "../data";
import { SectionHeader } from "../../../../ui/SectionHeader";
import { easeOut } from "../../../../ui/EaseOut";

export default function LocationsSection() {


  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="LOKALIZACJE"
          title="Trenuj blisko siebie"
          desc="Prowadzimy zajęcia w kilku miejscowościach regionu lubelskiego."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {locations.map((city, i) => (
            <motion.div
              key={city}
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.05, ease: easeOut}}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-red-400" />
              {city}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-white/65">
          Świdnik · Łęczna · Milejów · Piaski · Snopków · Jastków
        </div>
      </div>
    </section>
  );
}
