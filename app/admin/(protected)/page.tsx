import Link from "next/link";
import {connectDB} from "@/lib/db";
import SiteSettings from "@/models/SiteSettings";
import Post from "@/models/Post";

const siteKey = process.env.SITE_KEY!;
type DashboardPost = {
  _id: string;
  title: string;
  slug: string;
  isPublished: boolean;
};


export default async function DashboardPage() {
  await connectDB();

 const [settings, totalPosts, publishedPosts, latestPosts] = await Promise.all([
   SiteSettings.findOne({siteKey}).lean(),
   Post.countDocuments({siteKey}),
   Post.countDocuments({siteKey, isPublished: true}),
   Post.find({siteKey}).sort({createdAt: -1}).limit(5).lean() as Promise<
     DashboardPost[]
   >,
 ]);


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Szybki podgląd + skróty do najważniejszych rzeczy.
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <ActionCard
          title="Podgląd strony"
          desc="Otwórz stronę w nowej karcie"
          href="/"
          external
        />
        <ActionCard
          title="Dodaj wpis"
          desc="Utwórz nową aktualność"
          href="/admin/posts/new"
        />
        <ActionCard
          title="Kontakt / ustawienia"
          desc="Telefon, email, adres, infobar"
          href="/admin/settings"
        />
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Wpisy (łącznie)" value={totalPosts} />
        <StatCard label="Opublikowane" value={publishedPosts} />
        <StatCard label="Firma" value={settings?.companyName || "Brak"} />
      </div>

      {/* Latest posts preview */}
      <div className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-lg font-semibold">Ostatnie wpisy</h2>
          <Link
            className="text-sm text-muted-foreground hover:text-foreground"
            href="/admin/posts"
          >
            Zobacz wszystkie →
          </Link>
        </div>

        {latestPosts.length === 0 ? (
          <div className="rounded-xl border bg-background p-6 text-sm text-muted-foreground">
            Nie masz jeszcze wpisów. Kliknij “Dodaj wpis”.
          </div>
        ) : (
          <div className="grid gap-3">
            {latestPosts.map((p) => (
              <div
                key={String(p._id)}
                className="flex flex-col gap-3 rounded-xl border bg-background p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="truncate font-medium">{p.title}</div>
                    <span
                      className={
                        "rounded-full px-2 py-0.5 text-xs " +
                        (p.isPublished
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-muted text-muted-foreground")
                      }
                    >
                      {p.isPublished ? "Opublikowany" : "Szkic"}
                    </span>
                  </div>
                  <div className="mt-1 truncate text-xs text-muted-foreground">
                    /news/{p.slug}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-muted"
                    href={`/admin/posts/${p._id}/edit`}
                  >
                    Edytuj
                  </Link>

                  {p.isPublished ? (
                    <Link
                      className="rounded-lg border px-3 py-2 text-sm hover:bg-muted"
                      href={`/news/${p.slug}`}
                      target="_blank"
                    >
                      Podgląd
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ActionCard({
  title,
  desc,
  href,
  external,
}: {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className="group rounded-xl border bg-background p-5 transition hover:shadow-sm"
    >
      <div className="font-medium">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
      <div className="mt-3 text-xs text-muted-foreground group-hover:text-foreground">
        Otwórz →
      </div>
    </Link>
  );
}

function StatCard({label, value}: {label: string; value: string | number}) {
  return (
    <div className="rounded-xl border bg-background p-5">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}
