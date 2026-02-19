import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/dan/layout/Nav";
import Footer from "@/components/dan/layout/Footer";
import { posts } from "../../../components/dan/news/posts";


function formatPL(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function normalizeSlug(s: string) {
  return decodeURIComponent(s).trim().toLowerCase().replace(/\s+/g, "-");
}

export default async function NewsPostPage({params}: {params: {slug: string}}) {
  const {slug: rawSlug} = await params;
  const slug = normalizeSlug(rawSlug);
console.log("slug",slug);

  const post = posts.find((p) => normalizeSlug(p.id) === slug);
console.log("post",post);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main className="mx-auto max-w-4xl px-4 pt-28 pb-20">
          <h1 className="text-3xl font-black">Nie znaleziono wpisu</h1>
          <p className="mt-3 text-white/70">
            Sprawdź listę aktualności — możliwe, że zmienił się adres wpisu.
          </p>
          <Link
            href="/aktualnosci"
            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black hover:bg-white/90"
          >
            Wróć do aktualności
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="relative mx-auto max-w-4xl px-4 pt-28 pb-20">
        <Link
          href="/news"
          className="text-sm text-white/70 hover:text-white"
        >
          ← Wróć do aktualności
        </Link>

        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/60">
          <span>{formatPL(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>{post.readTime}</span>
        </div>

        {/* Cover / Placeholder */}
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
          {post.cover ? (
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          ) : (
            // ✅ PLACEHOLDER (jak w kartach)
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white/75">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.16),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,215,90,0.10),transparent_60%)]" />

              <div className="relative text-center">
                <div className="text-xs font-semibold tracking-[0.28em] text-white/60">
                  AKTUALNOŚCI
                </div>
                <div className="mt-3 text-2xl font-black tracking-tight text-white">
                  {post.category}
                </div>
                <div className="mt-2 text-sm text-white/65">
                  Brak zdjęcia okładki — treść poniżej
                </div>
              </div>
            </div>
          )}

          {/* Overlay zawsze (na cover i placeholder) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
        </div>

        <article className="mt-10 space-y-4 text-white/75">
          {post.content.split("\n\n").map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </article>

        <div className="mt-12 flex gap-3">
          <Link
            href="/treningi#zapisy"
            className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black hover:bg-white/90"
          >
            Zapisz się na trening
          </Link>
          <Link
            href="/treningi#grafik"
            className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white/90 hover:border-white/25 hover:bg-white/10"
          >
            Zobacz grafik
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
