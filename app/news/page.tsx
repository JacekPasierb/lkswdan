import PageHero from "@/components/dan/layout/PageHero";
import NewsSection from "@/components/dan/news/sections/NewsSection";

export default function Page() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="AKTUALNOŚCI"
        title="Klub żyje też poza salą"
        desc="Zgrupowania, wydarzenia, projekty społeczne, nowe kursy i starty. DAN — więcej niż sport."
        crumbs={[{label: "Home", href: "/"}, {label: "Aktualności"}]}
        primaryCta={{label: "Treningi", href: "/treningi"}}
        secondaryCta={{label: "Historia klubu", href: "/historia"}}
        accent="gold"
      />

      <NewsSection />
    </main>
  );
}
