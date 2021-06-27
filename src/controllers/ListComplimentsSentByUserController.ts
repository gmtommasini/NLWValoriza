import { Request, Response } from "express"
import { ListComplimentsSentByUserService } from "../services/ListComplimentsSentByUserService";

class ListComplimentsSentByUserController {
    async handle(req: Request, res: Response) {

        const { user_id } = req;  //for logged user
        //const { user_id } = req.body; //for any user
        console.log(" Comps sent by " + user_id);
        const listComplimentsSentByUserService = new ListComplimentsSentByUserService();
        const compliments = await listComplimentsSentByUserService.execute(
            user_id
        );

        return res.json(compliments);
    }
}

export { ListComplimentsSentByUserController }