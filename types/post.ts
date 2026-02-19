export type PostItem = {
  _id: string;
  siteKey: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  coverImageUrl?: string;
  isPublished: boolean;
  publishedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
};
