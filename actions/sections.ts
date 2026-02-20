"use server";

import {revalidatePath} from "next/cache";
import {MongoClient} from "mongodb";

/* ========================
   Typy danych
======================== */

type HeroSection = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
};

type ServiceItem = {
  title: string;
  description: string;
  iconName?: string;
};

type AboutSection = {
  title: string;
  content: string;
};

type FooterSection = {
  text: string;
};

export type SectionsDoc = {
  _id: string; // singleton
  hero: HeroSection;
  services: ServiceItem[];
  about: AboutSection;
  footer: FooterSection;
  createdAt?: Date;
  updatedAt: Date;
};

/* ========================
   Mongo client
======================== */

const uri = process.env.MONGO_URI!;



let client: MongoClient | null = null;

async function getClient(): Promise<MongoClient> {
  if (!client) {
    client = new MongoClient(uri);
  }

  await client.connect();
  return client;
}

/* ========================
   Helpers
======================== */

function parseServices(json: string): ServiceItem[] {
  try {
    const parsed = JSON.parse(json);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is ServiceItem =>
        typeof item?.title === "string" && typeof item?.description === "string"
    );
  } catch {
    return [];
  }
}

/* ========================
   Server Action
======================== */

export async function saveSections(fd: FormData): Promise<void> {
  const hero: HeroSection = {
    title: String(fd.get("heroTitle") ?? ""),
    subtitle: String(fd.get("heroSubtitle") ?? ""),
    ctaText: String(fd.get("heroCtaText") ?? ""),
    ctaHref: String(fd.get("heroCtaHref") ?? ""),
  };

  const about: AboutSection = {
    title: String(fd.get("aboutTitle") ?? ""),
    content: String(fd.get("aboutContent") ?? ""),
  };

  const footer: FooterSection = {
    text: String(fd.get("footerText") ?? ""),
  };

  const servicesJson = String(fd.get("servicesJson") ?? "[]");
  const services = parseServices(servicesJson);

  const now = new Date();

  const doc: SectionsDoc = {
    _id: "singleton",
    hero,
    about,
    services,
    footer,
    updatedAt: now,
  };

  const mongo = await getClient();
  const db = mongo.db();

  const collection = db.collection<SectionsDoc>("sections");

  await collection.updateOne(
    {_id: "singleton"},
    {
      $set: doc,
      $setOnInsert: {
        createdAt: now,
      },
    },
    {upsert: true}
  );

  /* Odśwież strony */
  revalidatePath("/");
  revalidatePath("/admin");
}
