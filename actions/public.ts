"use server";

import {connectDB} from "@/lib/db";
import SiteSettings from "@/models/SiteSettings";
import Post from "@/models/Post";

const siteKey = process.env.SITE_KEY!;

export async function getPublicContent() {
  await connectDB();

  const [settings, latestPosts] = await Promise.all([
    SiteSettings.findOne({siteKey}).lean(),

    Post.find({siteKey, isPublished: true})
      .sort({publishedAt: -1})
      .limit(3)
      .lean(),
  ]);

  return {settings, latestPosts};
}
