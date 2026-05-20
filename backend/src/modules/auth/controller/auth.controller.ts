import { Response, Request } from "express";
import { asyncHandler } from "../../../common/utils/asyncHandler.js"

export const registerUserController = asyncHandler (async(req:Request, res:Response, next)=>{


    const { name, email, password } = req.body;

    

})