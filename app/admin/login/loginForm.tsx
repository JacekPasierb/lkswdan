"use client";

import {useState} from "react";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/Label";

export default function LoginForm() {
  const sp = useSearchParams();
  const from = sp.get("from") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: from,
    });

    setPending(false);

    if (!res?.ok) {
      setError("Nieprawidłowy email lub hasło.");
      return;
    }

    window.location.href = res.url || "/admin";
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border bg-background shadow-sm md:grid-cols-2">
          <div className="hidden flex-col justify-between bg-gradient-to-b from-background to-muted p-8 md:flex">
            <div>
              <div className="text-lg font-semibold">CMS</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Panel administracyjny do zarządzania treścią strony.
              </p>
            </div>
            <div className="text-xs text-muted-foreground">
              Zaloguj się kontem administratora.
            </div>
          </div>

          <div className="p-6 md:p-10">
            <Card className="border-0 shadow-none">
              <CardHeader className="px-0">
                <CardTitle className="text-2xl">Logowanie</CardTitle>
                <CardDescription>
                  Podaj email i hasło administratora.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-0">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@firma.pl"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Hasło</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  {error && (
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {error}
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={pending}>
                    {pending ? "Logowanie..." : "Zaloguj"}
                  </Button>

                  <div className="text-xs text-muted-foreground">
                    Brak rejestracji — konta tworzone ręcznie w bazie.
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
