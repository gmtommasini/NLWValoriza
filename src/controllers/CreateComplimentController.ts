import { Request, Response } from "express"
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
    async handle(req: Request, res: Response) {

        const { tag_id, user_receiver, message } = req.body;  //update later for user from token
        
        const createComplimentService = new CreateComplimentService();
        const compliment = await createComplimentService.execute({
            tag_id, 
            user_sender : req.user_id, 
            user_receiver, 
            message
        });

        return res.json(compliment);
    }
}

export { CreateComplimentController }