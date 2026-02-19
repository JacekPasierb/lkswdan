import WhySection from "@/components/dan/home/sections/WhySection";
import LocationsSection from "@/components/dan/home/sections/LocationsSection";
import AnniversarySection from "@/components/dan/home/sections/AnniversarySection";

import CommunitySection from "@/components/dan/home/sections/ComunitySection";
import ValuesSection from "../components/dan/home/sections/ValuesSection";
import StatsStrip from "../components/dan/home/sections/StartsStrip";
import TestimonialsSection from "../components/dan/home/sections/TestimonialsSection";
import Hero from "../components/dan/home/sections/Hero";

export default function HomePage() {
  return (
    <>
      <main className="relative">
        <Hero />
        <WhySection />
        <LocationsSection />
        <AnniversarySection />
        <ValuesSection />
        <StatsStrip />

        <TestimonialsSection />
        <CommunitySection />
      </main>
    </>
  );
}
