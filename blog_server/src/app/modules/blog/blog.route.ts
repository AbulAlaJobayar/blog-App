import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { blogSchema } from "./blog.validation";
import { BlogController } from "./blog.controller";



const router = Router();
router.post(
  "/posts",
  validateRequest(blogSchema),
  BlogController.createBlogIntoDB
);
router.get("/posts", BlogController.getAllBlogFromDB);
router.get("/posts/:id", BlogController.getSingleBlogFromDB);

export const BlogRouter = router;
