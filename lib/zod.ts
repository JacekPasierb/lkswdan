import {z} from "zod";

export const SettingsSchema = z.object({
  companyName: z.string().min(1, "Podaj nazwę firmy"),
  phone: z.string().optional().or(z.literal("")),
  email: z.string().email("Niepoprawny email").optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  logoUrl: z.string().url("Niepoprawny URL").optional().or(z.literal("")),
  facebook: z.string().url("Niepoprawny URL").optional().or(z.literal("")),
  instagram: z.string().url("Niepoprawny URL").optional().or(z.literal("")),
  linkedin: z.string().url("Niepoprawny URL").optional().or(z.literal("")),
});

export const PostSchema = z.object({
  title: z.string().min(3, "Tytuł min. 3 znaki"),
  slug: z.string().optional().or(z.literal("")),
  excerpt: z
    .string()
    .max(300, "Zajawka max 300 znaków")
    .optional()
    .or(z.literal("")),
  content: z
    .string()
    .min(10, "Treść min. 10 znaków")
    .optional()
    .or(z.literal("")),
  coverImageUrl: z.string().url("Niepoprawny URL").optional().or(z.literal("")),
  isPublished: z.string().optional(), // checkbox z FormData
});