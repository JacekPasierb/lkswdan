"use client";

import {useTransition} from "react";
import {toast} from "sonner";
import {savePost} from "@/actions/posts";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/Label";
import {PostItem} from "../../../types/post";

export default function PostForm({
  initial,
  id,
}: {
  initial: PostItem | null;
  id: string | null;
}) {
  const [pending, start] = useTransition();

  return (
    <form
      action={(fd) =>
        start(async () => {
          try {
            await savePost(id, fd);
            toast.success("Zapisano wpis");
          } catch (e: unknown) {
            if (e instanceof Error) {
              toast.error(e.message);
            } else {
              toast.error("Błąd zapisu");
            }
          }
        })
      }
      className="space-y-5 rounded-xl border bg-background p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Tytuł</Label>
          <Input name="title" defaultValue={initial?.title || ""} required />
        </div>

        <div className="space-y-2">
          <Label>Slug (opcjonalnie)</Label>
          <Input
            name="slug"
            defaultValue={initial?.slug || ""}
            placeholder="auto z tytułu"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Krótki opis (widoczny na liście aktualności)</Label>
        <textarea
          name="excerpt"
          defaultValue={initial?.excerpt || ""}
          className="min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label>Treść</Label>
        <textarea
          name="content"
          defaultValue={initial?.content || ""}
          className="min-h-56 w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label>Cover image URL (opcjonalnie)</Label>
        <Input
          name="coverImageUrl"
          defaultValue={initial?.coverImageUrl || ""}
          placeholder="https://..."
        />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="isPublished"
          defaultChecked={!!initial?.isPublished}
        />
        Opublikowany
      </label>

      <Button type="submit" disabled={pending}>
        {pending ? "Zapisywanie..." : "Zapisz"}
      </Button>
    </form>
  );
}
