export const getBlogBySlug = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${slug}`,
      { cache: "no-store" } // ensures fresh data on each request
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
};
