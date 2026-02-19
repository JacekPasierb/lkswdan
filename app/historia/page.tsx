import PageHero from "@/components/dan/layout/PageHero";
import HistoryWrap from "@/components/dan/history/HistoryWrap";

import IntroCard from "@/components/dan/history/sections/IntroCard";
import TimelineGrid from "@/components/dan/history/sections/TimelineGrid";
import MastersBlock from "@/components/dan/history/sections/MastersBlock";
import PhilosophyBlock from "@/components/dan/history/sections/PhilosophyBlock";
import OrgsBlock from "@/components/dan/history/sections/OrgsBlock";
import ClosingBlock from "@/components/dan/history/sections/ClosingBlock";

export default function Page() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="HISTORIA"
        title="Tradycja, która buduje przyszłość"
        desc="Od pierwszych sekcji w latach 70. do nowoczesnego LKSW DAN. Wiedza, seminaria, system i społeczność."
        crumbs={[{label: "Home", href: "/"}, {label: "Historia"}]}
        primaryCta={{label: "Zobacz aktualności", href: "/aktualnosci"}}
        secondaryCta={{label: "Treningi i zapisy", href: "/treningi#zapisy"}}
        accent="gold"
      />

      <HistoryWrap>
        <IntroCard />
        <TimelineGrid />

        <div className="mt-20 space-y-10">
          <MastersBlock />
          <PhilosophyBlock />
        </div>

        <OrgsBlock />
        <ClosingBlock />
      </HistoryWrap>
    </main>
  );
}
