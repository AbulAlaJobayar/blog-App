import BlogList from "@/app/components/Home/BlogList";
import React, { Suspense } from "react";

const BlogPage = () => {
  return (
    <div className="py-20 md:py-26">


      <div>
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white my-10">
          ALL Blog
        </h1>
      </div>
      <div className="container mx-auto relative ">
        {/* Suspense wrapper */}
        <Suspense fallback={<p className="text-gray-500">Loading blogs...</p>}>
          <BlogList />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogPage;
