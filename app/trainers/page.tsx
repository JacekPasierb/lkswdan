import React from "react";
import PageHero from "../../components/dan/layout/PageHero";
import TrainersSection from "../../components/dan/trainers/sections/TrainersSection";

export default function Page() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="TRENERZY"
        title="Sztab, który buduje technikę i charakter"
        desc="Doświadczenie, metodyka i bezpieczeństwo. Trenujesz w systemie — nie w chaosie."
        crumbs={[{label: "Home", href: "/"}, {label: "Trenerzy"}]}
        primaryCta={{label: "Zapisz się", href: "/treningi#zapisy"}}
        secondaryCta={{label: "Kontakt", href: "/#kontakt"}}
        accent="red"
      />
      <TrainersSection/>
    </main>
  );
}
