import { Request, Response} from "express"
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
    async handle(req : Request, res : Response){
        const listUsersService = new ListUsersService();
        const usersList = await listUsersService.execute();

        return res.json(usersList);
    }
}

export {ListUsersController}