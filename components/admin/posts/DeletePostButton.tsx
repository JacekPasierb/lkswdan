"use client";

import {useTransition} from "react";
import {toast} from "sonner";
import {deletePost} from "@/actions/posts";

export default function DeletePostButton({id}: {id: string}) {
  const [pending, start] = useTransition();

  return (
    <button
      className="rounded-lg border px-3 py-2 text-sm hover:bg-muted disabled:opacity-50"
      disabled={pending}
      onClick={() => {
        if (!confirm("Usunąć wpis?")) return;
        start(async () => {
          try {
            await deletePost(id);
            toast.success("Usunięto wpis");
          } catch (e: unknown) {
            const message = e instanceof Error ? e.message : "Błąd usuwania";
            toast.error(message);
          }

        });
      }}
    >
      {pending ? "Usuwanie..." : "Usuń"}
    </button>
  );
}
