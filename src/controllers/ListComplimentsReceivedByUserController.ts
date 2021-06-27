import { Request, Response } from "express"
import { ListComplimentsReceivedByUserService } from "../services/ListComplimentsReceivedByUserService";

class ListComplimentReceivedByUserController {
    async handle(req: Request, res: Response) {

        const { user_id } = req;  //for logged user
        //const { user_id } = req.body; //for any user
        console.log("User " + user_id);
        const listComplimentsReceivedByUserService = new ListComplimentsReceivedByUserService();
        const compliments = await listComplimentsReceivedByUserService.execute(user_id);

        return res.json(compliments);
    }
}

export { ListComplimentReceivedByUserController }