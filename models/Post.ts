import mongoose, {Schema} from "mongoose";

const PostSchema = new Schema(
  {
    siteKey: {type: String, required: true, index: true},

    title: {type: String, required: true},
    slug: {type: String, required: true},

    excerpt: {type: String, default: ""},
    content: {type: String, default: ""},

    coverImageUrl: {type: String, default: ""},

    isPublished: {type: Boolean, default: false},
    publishedAt: {type: Date, default: null},
  },
  {timestamps: true}
);

// unikalny slug w obrębie jednego siteKey
PostSchema.index({siteKey: 1, slug: 1}, {unique: true});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
