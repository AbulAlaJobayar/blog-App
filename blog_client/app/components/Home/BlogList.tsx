import { getBlog } from "@/app/services/action/getAllBlog";
import { ShineBorderCard } from "./card";

export default async function BlogList() {
  const blogs = await getBlog();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs?.data?.map((blog: any) => (
        <ShineBorderCard data={blog} />
      ))}
    </div>
  );
}
