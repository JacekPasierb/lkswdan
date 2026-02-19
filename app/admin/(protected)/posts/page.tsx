import Link from "next/link";
import {listPosts} from "@/actions/posts";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import DeletePostButton from "../../../../components/admin/posts/DeletePostButton";

type PostItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  isPublished: boolean;
  publishedAt?: Date | null;
};


export default async function AdminPostsPage() {
 const posts = (await listPosts()) as PostItem[];


  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Aktualności</h1>
          <p className="text-sm text-muted-foreground">
            Dodawaj i edytuj wpisy.
          </p>
        </div>

        <Link
          className="inline-flex rounded-lg bg-black px-4 py-2 text-sm text-white"
          href="/admin/posts/new"
        >
          + Nowy wpis
        </Link>
      </div>

      {posts.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Brak wpisów</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Dodaj pierwszy wpis, żeby pojawił się na stronie publicznej.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {posts.map((p) => (
            <Card key={String(p._id)}>
              <CardContent className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-medium truncate">{p.title}</div>
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
                  <div className="mt-1 text-xs text-muted-foreground truncate">
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

                  <DeletePostButton id={String(p._id)} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
