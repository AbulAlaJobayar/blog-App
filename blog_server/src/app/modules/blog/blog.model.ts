import{ model, Schema } from "mongoose";
import { BlogStatus, type TBlog } from "./blog.interface";


const BlogSchema: Schema<TBlog> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 120,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 20,
    },
    excerpt: {
      type: String,
      maxlength: 200,
      trim: true,
    },
    status: {
      type: String,
      enum: Object.values(BlogStatus),
      default: BlogStatus.DRAFT,
    },
    tags: {
      type: [String],
    },
    publishedAt: {
      type: String,
    },
    author:{
      type:String
    }
  },
  { timestamps: true }
);

export const blog= model<TBlog>("Blog", BlogSchema);