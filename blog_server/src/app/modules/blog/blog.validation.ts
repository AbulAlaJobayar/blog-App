import { z } from "zod";

// Blog Status Enum
export const BlogStatusEnum = z.enum(["draft", "published", "archived"]);


// Corrected Zod schema
export const blogSchema = z.object({
  title: z
    .string({})
    .min(3, "Title must be at least 3 characters")
    .max(120, "Title cannot exceed 120 characters"),

  slug: z
    .string(),

  content: z
    .string()
    .min(20, "Content must be at least 20 characters"),

  excerpt: z
    .string()
    .max(200, "Excerpt cannot exceed 200 characters")
    .optional(),

  status: BlogStatusEnum.default("draft"),

  tags: z
    .array(
      z
        .string()
        .min(2, "Each tag must be at least 2 characters")
        .max(20, "Each tag cannot exceed 20 characters")
    )
    .max(10, "No more than 10 tags")
    .optional(),

  publishedAt: z.string().optional(),
  author:z.string()

})
