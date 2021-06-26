
import { Request, Response, NextFunction } from "express";

export function ensureAdmin( req: Request, res:Response, next: NextFunction){
    //check if admin
    console.log("ensure admin")
    const admin = false; // to do

    if(admin){
        return next();
    }
    return res.status(401).json({
        error:"Unauthorized"
    });
}