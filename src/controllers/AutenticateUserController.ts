import { Request, Response} from "express"
import { AutenticateUserService } from "../services/AutenticateUserService";

class AutenticateUserController {

    async handle(req : Request, res : Response){
        req.body.email = req.body.email.toLowerCase();
        const { email, password }= req.body;
        const autenticateUserService = new AutenticateUserService();
        const token = await autenticateUserService.execute({email, password});
        return res.json(token);
    }}

export {AutenticateUserController}