import mongoose from "mongoose";

const SiteSettingsSchema = new mongoose.Schema({
  siteKey: String,

  companyName: String,
  phone: String,
  email: String,
  address: String,

  socials: {
    facebook: String,
    instagram: String,
    linkedin: String,
  },

  logoUrl: String,
});

export default mongoose.models.SiteSettings ||
  mongoose.model("SiteSettings", SiteSettingsSchema);
