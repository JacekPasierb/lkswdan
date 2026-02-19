import SettingsForm from "@/components/admin/SettingsForm";
import {getSettings} from "@/actions/settings";

export default async function SettingsPage() {
  const data = await getSettings();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Ustawienia</h1>
        <p className="text-sm text-muted-foreground">
          Dane firmy, kontakt i social media.
        </p>
      </div>

      <SettingsForm initial={data} />
    </div>
  );
}
