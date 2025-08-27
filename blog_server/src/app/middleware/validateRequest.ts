import { ZodObject } from 'zod';



import type { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';

export const validateRequest = (schema: ZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync(req.body);
    next();
  });
};
