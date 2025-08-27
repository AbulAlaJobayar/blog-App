import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { blogSchema } from "./blog.validation";
import { BlogController } from "./blog.controller";



const router = Router();
router.post(
  "/create_blog",
  validateRequest(blogSchema),
  BlogController.createBlogIntoDB
);
router.get("/blogs", BlogController.getAllBlogFromDB);
router.get("/blog/:id", BlogController.getSingleBlogFromDB);

export const BlogRouter = router;
