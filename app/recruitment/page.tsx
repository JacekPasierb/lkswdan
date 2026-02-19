import React from "react";
import PageHero from "@/components/dan/layout/PageHero";
import RecruitmentForm from "../../components/dan/recruitment/RecruitmentForm";

export default function Page() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="REKRUTACJA"
        title="Zapis do grup naborowych"
        desc="Prosimy o dokładne wypełnienie formularza. Dane są potrzebne do przypisania do grupy i kontaktu."
        crumbs={[{label: "Home", href: "/"}, {label: "Rekrutacja"}]}
        primaryCta={{label: "Wypełnij formularz", href: "#formularz"}}
        secondaryCta={{label: "Kontakt", href: "/#kontakt"}}
        accent="red"
      />

      <RecruitmentForm />
    </main>
  );
}
