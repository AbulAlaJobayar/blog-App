import React from "react";
import { Suspense } from "react";
import BlogList from "./BlogList";

const BlogSection = () => {


  return (
    <div className="my-10">
      <div>
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white my-10">
          ALL Blog
        </h1>
      </div>
      <div className="container mx-auto relative ">
        {/* Suspense wrapper */}
      <Suspense fallback={<p className="text-gray-500">Loading blogs...</p>}>
        <BlogList/>
      </Suspense>
      </div>
    </div>
  );
};

export default BlogSection;
