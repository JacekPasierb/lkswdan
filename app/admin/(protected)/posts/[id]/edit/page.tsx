import {getPostById} from "@/actions/posts";
import PostForm from "@/components/admin/posts/PostForm";
import {notFound} from "next/navigation";

export default async function EditPostPage({params}: {params: Promise<{id: string}>}) {
 const {id} = await params;

 const post = await getPostById(id);
 if (!post) notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Edytuj wpis</h1>
        <p className="text-sm text-muted-foreground">
          Zmieniaj treść i publikację.
        </p>
      </div>

      <PostForm id={id} initial={post} />
    </div>
  );
}
