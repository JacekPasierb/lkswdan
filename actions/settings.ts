"use server";

import {connectDB} from "@/lib/db";
import SiteSettings from "@/models/SiteSettings";
import {SettingsSchema} from "@/lib/zod";

const siteKey = process.env.SITE_KEY!;

function s(fd: FormData, key: string) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function saveSettings(formData: FormData) {
  await connectDB();

  const raw = {
    companyName: s(formData, "companyName"),
    phone: s(formData, "phone"),
    email: s(formData, "email"),
    address: s(formData, "address"),
    logoUrl: s(formData, "logoUrl"),
    facebook: s(formData, "facebook"),
    instagram: s(formData, "instagram"),
    linkedin: s(formData, "linkedin"),
  };

  const parsed = SettingsSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Błąd walidacji");
  }

  await SiteSettings.findOneAndUpdate(
    {siteKey},
    {
      siteKey,
      companyName: parsed.data.companyName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      address: parsed.data.address,
      logoUrl: parsed.data.logoUrl,
      socials: {
        facebook: parsed.data.facebook,
        instagram: parsed.data.instagram,
        linkedin: parsed.data.linkedin,
      },
    },
    {upsert: true, new: true}
  );
}

export async function getSettings() {
  await connectDB();
  return SiteSettings.findOne({siteKey}).lean();
}
