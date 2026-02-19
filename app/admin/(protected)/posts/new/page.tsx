import PostForm from "@/components/admin/posts/PostForm";

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Nowy wpis</h1>
        <p className="text-sm text-muted-foreground">Utwórz aktualność.</p>
      </div>

      <PostForm id={null} initial={null} />
    </div>
  );
}
