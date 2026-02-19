import React from "react";
import PageHero from "../../components/dan/layout/PageHero";
import ScheduleSection from "../../components/dan/trainings/sections/SheduleSection";

export default function Page() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="TRENINGI"
        title="Po prostu przyjdź. Resztę dowiezie plan."
        desc="Wybierz lokalizację i grupę. Jeśli nie wiesz gdzie pasujesz — zadzwoń, dobierzemy poziom i powiemy co zabrać."
        crumbs={[{label: "Home", href: "/"}, {label: "Treningi"}]}
        primaryCta={{label: "Sprawdź grafik", href: "#grafik"}}
        secondaryCta={{label: "Kontakt", href: "/#kontakt"}}
        accent="red"
      />

      <ScheduleSection />
    </main>
  );
}
