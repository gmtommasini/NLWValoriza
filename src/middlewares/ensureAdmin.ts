
import { Request, Response, NextFunction } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    //recovering user_id from request included by ensureAuthenticated
    const { user_id } = req;
    console.log(user_id);

    //check if admin
    console.log("ensure admin")
    const admin = true; // to do

    if (admin) {
        return next();
    }
    return res.status(401).json({
        error: "Unauthorized"
    });
}