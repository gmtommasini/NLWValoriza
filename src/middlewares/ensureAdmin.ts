
import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    console.log("ensure admin")

    //recovering user_id from request included by ensureAuthenticated
    const { user_id } = req;
    console.log("UId: " + user_id);

    const userRep =  getCustomRepository(UsersRepositories);
    //const user = await userRep.findOne(user_id);
    //
    //check if admin
    const {admin} = await userRep.findOne(user_id);

    if (admin) {
        return next();
    }
    return res.status(401).json({
        error: "Unauthorized"
    });
}