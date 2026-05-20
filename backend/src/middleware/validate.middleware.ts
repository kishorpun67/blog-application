// src/middleware/validate.middleware.ts
import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import { ApiError } from "../common/utils/ApiError.js";

export const validate = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next(); 
    } catch (error: any) {
      // 1. Double check that this is explicitly a Zod validation error
      if (error instanceof ZodError || error.name === "ZodError") {
        
        // FIX: Added safe fallback using '|| []' so .map() never loops over undefined
        const issues = (error.errors || []).map(
          (err: any) => `${err.path.join(".")}: ${err.message}`
        );
        
        const fallbackMessage = issues.length > 0 ? issues.join(", ") : "Invalid input parameters";
        return next(new ApiError(400, `Validation Failed: ${fallbackMessage}`));
      }
      
      // 2. If it's a regular code crash error, forward it along safely
      return next(error);
    }
  };
};