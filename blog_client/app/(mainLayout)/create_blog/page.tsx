"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner"; // optional toast notifications

export default function CreateBlogPage() {
  const [blog, setBlog] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    status: "",
    tags: [],
    author: "",
    publishedAt: new Date().toISOString(),
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      if (!res.ok) throw new Error("Failed to create blog");

      toast.success("Blog created successfully!");
      setBlog({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        status: "",
        tags: [],
        author: "",
        publishedAt: new Date().toISOString(),
      });
    } catch (error) {
      toast.error("Error creating blog");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full flex items-center justify-center border-2 py-20 md:py-26">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Create New Blog
        </h2>

        {/* Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="My First Blog Post"
            required
          />
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            name="author"
            value={blog.author}
            onChange={handleChange}
            placeholder="My First Blog Post"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            value={blog.slug}
            onChange={handleChange}
            placeholder="my-first-blog-post"
            required
          />
        </div>

        {/* Excerpt */}
        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={blog.excerpt}
            onChange={handleChange}
            placeholder="Short summary of your blog"
          />
        </div>

        {/* Content */}
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Full blog content here..."
            rows={8}
            required
          />
        </div>

        {/* Status */}
        <div>
          <Label htmlFor="status">Status</Label>
          <select
            name="status"
            id="status"
            value={blog.status}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-2"
          >
          
            <option value={"draft"}>Draft</option>
            <option value={"published"}>Published</option>
            <option value={"archived"}>Archived</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <Label htmlFor="tags">Tags (comma separated)</Label>
          <Input
            id="tags"
            name="tags"
            value={blog.tags?.join(", ")}
            onChange={(e: any) =>
              setBlog({
                ...blog,
                tags: e.target.value.split(",").map((t: any) => t.trim()),
              })
            }
            placeholder="typescript, mongoose, zod"
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating..." : "Create Blog"}
        </Button>
      </form>
    </div>
  );
}
