"use client";

import {useTransition} from "react";
import {toast} from "sonner";
import {saveSections} from "@/actions/sections";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";






type SectionsFormProps = {
  initial: SectionsData | null;
};

type HeroSection = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
};


type SectionsData = {
  hero?: HeroSection;

  services?: {
    title: string;
    description: string;
    iconName?: string;
  }[];

  about?: {
    title: string;
    content: string;
  };

  footer?: {
    text: string;
  };
};


export default function SectionsForm({initial}: SectionsFormProps) {
  const [pending, start] = useTransition();

  const defaultServices = JSON.stringify(
    initial?.services ?? [
      {title: "Usługa 1", description: "Opis usługi", iconName: "Sparkles"},
      {title: "Usługa 2", description: "Opis usługi", iconName: "Shield"},
    ],
    null,
    2
  );

  return (
    <form
      action={(fd) =>
        start(async () => {
          try {
            await saveSections(fd);
            toast.success("Zapisano sekcje");
          } catch (e: unknown) {
            const message = e instanceof Error ? e.message : "Błąd zapisu";
            toast.error(message);
          }
        })
      }
      className="space-y-6 rounded-xl border bg-background p-6"
    >
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Hero</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Tytuł</Label>
            <Input name="heroTitle" defaultValue={initial?.hero?.title || ""} />
          </div>
          <div>
            <Label>CTA tekst</Label>
            <Input
              name="heroCtaText"
              defaultValue={initial?.hero?.ctaText || ""}
            />
          </div>
        </div>
        <div>
          <Label>Podtytuł</Label>
          <Input
            name="heroSubtitle"
            defaultValue={initial?.hero?.subtitle || ""}
          />
        </div>
        <div>
          <Label>CTA link</Label>
          <Input
            name="heroCtaHref"
            defaultValue={initial?.hero?.ctaHref || ""}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">O nas</h2>
        <div>
          <Label>Tytuł</Label>
          <Input name="aboutTitle" defaultValue={initial?.about?.title || ""} />
        </div>
        <div>
          <Label>Treść</Label>
          <textarea
            name="aboutContent"
            defaultValue={initial?.about?.content || ""}
            className="min-h-28 w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Usługi</h2>
        <p className="text-sm text-muted-foreground">
          MVP: edycja jako JSON (później zrobimy UI listy + dodawanie).
        </p>
        <textarea
          name="servicesJson"
          defaultValue={defaultServices}
          className="min-h-48 w-full rounded-md border bg-background px-3 py-2 font-mono text-sm"
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Stopka</h2>
        <div>
          <Label>Tekst stopki</Label>
          <Input name="footerText" defaultValue={initial?.footer?.text || ""} />
        </div>
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Zapisywanie..." : "Zapisz"}
      </Button>
    </form>
  );
}
