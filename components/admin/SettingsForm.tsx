"use client";

import {useTransition} from "react";
import {toast} from "sonner";
import {saveSettings} from "@/actions/settings";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function SettingsForm({initial}: {initial: any}) {
  const [pending, start] = useTransition();

  return (
    <form
      action={(fd) =>
        start(async () => {
          try {
            await saveSettings(fd);
            toast.success("Zapisano ustawienia");
          } catch (e: any) {
            toast.error(e?.message ?? "Błąd zapisu");
          }
        })
      }
      className="space-y-4 rounded-xl border bg-background p-6"
    >
      <div>
        <Label>Nazwa firmy</Label>
        <Input
          name="companyName"
          defaultValue={initial?.companyName || ""}
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>Telefon</Label>
          <Input name="phone" defaultValue={initial?.phone || ""} />
        </div>
        <div>
          <Label>Email</Label>
          <Input name="email" defaultValue={initial?.email || ""} />
        </div>
      </div>

      <div>
        <Label>Adres</Label>
        <Input name="address" defaultValue={initial?.address || ""} />
      </div>

      <div>
        <Label>Logo URL</Label>
        <Input name="logoUrl" defaultValue={initial?.logoUrl || ""} />
      </div>

      <div className="pt-2">
        <div className="text-sm font-medium mb-2">Social links</div>
        <div className="grid gap-3">
          <Input
            name="facebook"
            placeholder="Facebook URL"
            defaultValue={initial?.socials?.facebook || ""}
          />
          <Input
            name="instagram"
            placeholder="Instagram URL"
            defaultValue={initial?.socials?.instagram || ""}
          />
          <Input
            name="linkedin"
            placeholder="LinkedIn URL"
            defaultValue={initial?.socials?.linkedin || ""}
          />
        </div>
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Zapisywanie..." : "Zapisz"}
      </Button>
    </form>
  );
}
