
  export const getBlog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`, {
    cache: "no-store", // ensures fresh data
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return res.json(); // return parsed data
};

