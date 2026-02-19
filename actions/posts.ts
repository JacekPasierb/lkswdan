"use server";

import {connectDB} from "@/lib/db";
import Post from "@/models/Post";
import {PostSchema} from "@/lib/zod";
import {slugify} from "@/lib/slug";
import {revalidatePath} from "next/cache";

const siteKey = process.env.SITE_KEY!;

type PostPayload = {
  siteKey: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  isPublished: boolean;
  publishedAt: Date | null;
};

function s(fd: FormData, key: string) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function listPosts() {
  await connectDB();
  return Post.find({siteKey}).sort({createdAt: -1}).lean();
}

export async function getPostById(id: string) {
  await connectDB();
  const doc = await Post.findOne({_id: id, siteKey}).lean();
  return doc ? JSON.parse(JSON.stringify(doc)) : null;
}


export async function savePost(id: string | null, formData: FormData) {
  await connectDB();

  const raw = {
    title: s(formData, "title"),
    slug: s(formData, "slug"),
    excerpt: s(formData, "excerpt"),
    content: s(formData, "content"),
    coverImageUrl: s(formData, "coverImageUrl"),
    isPublished: formData.get("isPublished") ? "on" : "",
  };

  const parsed = PostSchema.safeParse(raw);
  if (!parsed.success)
    throw new Error(parsed.error.issues[0]?.message ?? "Błąd walidacji");

  const title = parsed.data.title;
  const slug = slugify(parsed.data.slug || title);

  const isPublished = raw.isPublished === "on";
 const payload: PostPayload = {
   siteKey,
   title,
   slug,
   excerpt: parsed.data.excerpt || "",
   content: parsed.data.content || "",
   coverImageUrl: parsed.data.coverImageUrl || "",
   isPublished,
   publishedAt: isPublished ? new Date() : null,
 };

  try {
    if (id) {
      await Post.findOneAndUpdate({_id: id, siteKey}, payload, {new: true});
    } else {
      await Post.create(payload);
    }
  } catch (e: unknown) {
    const err = e as {code?: number | string; message?: string};

    // duplicate key (slug)
    if (String(err.code) === "11000") {
      throw new Error("Taki slug już istnieje. Zmień slug albo tytuł.");
    }

    throw new Error(err.message ?? "Nieoczekiwany błąd zapisu posta.");
  }


  revalidatePath("/admin/posts");
  revalidatePath("/news");
}

export async function deletePost(id: string) {
  await connectDB();
  await Post.deleteOne({_id: id, siteKey});

  revalidatePath("/admin/posts");
  revalidatePath("/news");
}
