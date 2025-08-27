"use client";

interface BlogContentProps {
  blog: any;
}

export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        By <span className="font-medium">{blog.author}</span> •{" "}
        {blog.publishedAt
          ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Unpublished"}
      </p>

      {blog.expert && (
        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
          {blog.expert}
        </p>
      )}

      <div className="prose prose-lg dark:prose-invert">
        <p>{blog.content}</p>
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {blog.tags.map((tag: any) => (
            <span
              key={tag}
              className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
