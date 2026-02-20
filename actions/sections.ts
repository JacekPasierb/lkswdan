"use server";

import {revalidatePath} from "next/cache";
import {MongoClient} from "mongodb";

const uri = process.env.MONGO_URI!;
let client: MongoClient | null = null;

async function getClient() {
  if (!client) client = new MongoClient(uri);
  await client.connect(); // <-- bez topology
  return client;
}

export async function saveSections(fd: FormData) {
  const hero = {
    title: String(fd.get("heroTitle") ?? ""),
    subtitle: String(fd.get("heroSubtitle") ?? ""),
    ctaText: String(fd.get("heroCtaText") ?? ""),
    ctaHref: String(fd.get("heroCtaHref") ?? ""),
  };

  const about = {
    title: String(fd.get("aboutTitle") ?? ""),
    content: String(fd.get("aboutContent") ?? ""),
  };

  const footer = {text: String(fd.get("footerText") ?? "")};

  const servicesJson = String(fd.get("servicesJson") ?? "[]");
  let services: any[] = [];
  try {
    services = JSON.parse(servicesJson);
  } catch {
    services = [];
  }

  const doc = {hero, about, services, footer, updatedAt: new Date()};

  const c = await getClient();
  const db = c.db();

  await db
    .collection("sections")
    .updateOne(
      {_id: "singleton"},
      {$set: doc, $setOnInsert: {createdAt: new Date()}},
      {upsert: true}
    );

  revalidatePath("/");
  revalidatePath("/admin");
}
