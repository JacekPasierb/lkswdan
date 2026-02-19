import type {ElementType} from "react";
import {Sparkles, Trophy, Users} from "lucide-react";

export type Category =
  | "Wszystkie"
  | "Zgrupowania"
  | "Wydarzenia"
  | "Społeczność"
  | "Nowe zajęcia"
  | "Sukcesy";

export type Post = {
  id: string; // slug
  title: string;
  excerpt: string;
  content: string; // pełna treść
  date: string; // ISO
  category: Exclude<Category, "Wszystkie">;
  readTime: string;
  cover?: string;
  tags: string[];
  icon?: ElementType;
  highlight?: boolean;
};

export const posts: Post[] = [
  {
    id: "30lat",
    title: "30-lecie LKSW DAN — trzy dekady charakteru",
    excerpt:
      "W 2024 świętowaliśmy 30 lat działalności. Historia, ludzie, energia sali i kierunek na kolejne lata.",
    content:
      "W 2024 roku LKSW DAN obchodził 30-lecie działalności. To trzy dekady pracy z zawodnikami, trenerami i pasjonatami sportów walki. Jubileusz był momentem podsumowania oraz potwierdzeniem, że trzymamy kurs: profesjonalizm, konsekwencja i pasja.\n\nW najbliższych miesiącach planujemy kolejne wydarzenia klubowe, zgrupowania oraz rozwój oferty treningowej. Jeśli chcesz dołączyć — zapraszamy na trening próbny.",
    date: "2024-10-12",
    category: "Wydarzenia",
    readTime: "3 min",
    cover: "/30lecie.png",
    tags: ["1994–2024", "jubileusz", "społeczność", "dyscyplina"],
    icon: Trophy,
    highlight: true,
  },
  {
    id: "zgrupowanie",
    title: "Zgrupowanie klubowe — technika, integracja, tempo",
    excerpt:
      "Weekendowy wyjazd treningowy: dużo pracy, dużo śmiechu i jedna wspólna misja — progres.",
    content:
      "Weekendowe zgrupowanie to miks techniki, motoryki i integracji. Pracujemy blokami: fundamenty, zadania, sparingi kontrolowane. Poza salą: regeneracja i wspólny czas.\n\nTakie wyjazdy budują formę i charakter — a do tego zacieśniają społeczność klubu.",
    date: "2025-02-18",
    category: "Zgrupowania",
    readTime: "4 min",
    tags: ["wyjazd", "integracja", "trening", "progres"],
    icon: Users,
  },
  {
    id: "projekty",
    title: "Projekty społeczne — sport, który pomaga",
    excerpt:
      "Wspieramy lokalne inicjatywy i pomagamy innym. DAN to nie tylko trening — to odpowiedzialność.",
    content:
      "W LKSW DAN wierzymy, że sport ma realną moc wpływu. Dlatego angażujemy się w lokalne akcje i inicjatywy. To element naszej tożsamości i wartości.",
    date: "2025-03-05",
    category: "Społeczność",
    readTime: "3 min",
    tags: ["lokalnie", "wsparcie", "społeczność"],
    icon: Sparkles,
  },
  {
    id: "nowe-zajecia",
    title: "Nowe grupy i zajęcia — rozwijamy ofertę",
    excerpt:
      "Dostosowujemy trening do poziomu: technika, kondycja, praca zadaniowa. Każdy ma swój tor.",
    content:
      "W LKSW DAN wierzymy, że sport ma realną moc wpływu. Dlatego angażujemy się w lokalne akcje i inicjatywy. To element naszej tożsamości i wartości.",
    date: "2025-04-01",
    category: "Nowe zajęcia",
    readTime: "2 min",
    tags: ["taekwon-do", "kickboxing", "grupy", "poziomy"],
    icon: Sparkles,
  },
  {
    id: "turniej",
    title: "Start kontrolny — sprawdzian formy i charakteru",
    excerpt:
      "Przygotowanie pod zawody to proces. Każdy start to doświadczenie, nie tylko wynik.",
    content:
      "W LKSW DAN wierzymy, że sport ma realną moc wpływu. Dlatego angażujemy się w lokalne akcje i inicjatywy. To element naszej tożsamości i wartości.",
    date: "2025-05-10",
    category: "Sukcesy",
    readTime: "3 min",
    tags: ["starty", "przygotowanie", "motywacja"],
    icon: Trophy,
  },
  {
    id: "piknik",
    title: "Piknik klubowy — rodziny, zawodnicy, klimat",
    excerpt:
      "Integracja poza salą: grill, rozmowy, sportowe historie i plan na kolejny sezon.",
    content:
      "W LKSW DAN wierzymy, że sport ma realną moc wpływu. Dlatego angażujemy się w lokalne akcje i inicjatywy. To element naszej tożsamości i wartości.",
    date: "2025-06-02",
    category: "Wydarzenia",
    readTime: "2 min",
    tags: ["rodziny", "integracja", "klimat"],
    icon: Users,
  },
];
