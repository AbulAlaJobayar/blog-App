import type { TBlog } from "./blog.interface";
import { blog } from "./blog.model";


const createBlogIntoDB = async (payload: TBlog) => {
  const result = await blog.create(payload);
  return result;
};
const getAllBlogFromDB = async () => {
  const result = await blog.find();
  return result;
};
const getSingleBlogFromDB = async (id: string) => {
  const result = await blog.findOne({ _id: id });
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
};
