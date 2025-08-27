import httpStatus from "http-status";

import type { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BlogService } from "./blog.service";
import sendResponse from "../../utils/sendResponse";


const createBlogIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.createBlogIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully!",
    data: result,
  });
});

const getAllBlogFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrieved successfully!",
    data: result,
  }); 
});

const getSingleBlogFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BlogService.getSingleBlogFromDB(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrieved successfully!",
    data: result,
  });
});

export const BlogController = {
  createBlogIntoDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
};
