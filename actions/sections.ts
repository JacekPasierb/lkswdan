// actions/sections.ts
"use server";

import {revalidatePath} from "next/cache";
import {MongoClient} from "mongodb";

const uri = process.env.MONGO_URI!;
let client: MongoClient;

async function getClient() {
  if (!client) client = new MongoClient(uri);
  if (!client.topology?.isConnected?.()) await client.connect();
  return client;
}

function safeJsonParse<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
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

  const footer = {
    text: String(fd.get("footerText") ?? ""),
  };

  const servicesJson = String(fd.get("servicesJson") ?? "[]");
  const services = safeJsonParse<any[]>(servicesJson, []);

  const doc = {
    hero,
    about,
    services,
    footer,
    updatedAt: new Date(),
  };

  const c = await getClient();
  const db = c.db(); // jeśli używasz konkretnej nazwy bazy, daj: c.db("mydb")
  await db
    .collection("sections")
    .updateOne(
      {_id: "singleton"},
      {$set: doc, $setOnInsert: {createdAt: new Date()}},
      {upsert: true}
    );

  revalidatePath("/"); // strona główna
  revalidatePath("/admin"); // panel (jeśli wyświetlasz dane)
}
