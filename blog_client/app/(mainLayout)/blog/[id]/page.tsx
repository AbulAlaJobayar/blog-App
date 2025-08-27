import { getBlogBySlug } from "@/app/services/action/blog";
import React from "react";
import BlogContent from "./BlogContent";

const SingleBlogPage = async ({ params }: any) => {
  const blog = await getBlogBySlug(params.id);

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-100px)]  py-20 md:py-26">
      <BlogContent blog={blog} />
    </div>
  );
};

export default SingleBlogPage;
