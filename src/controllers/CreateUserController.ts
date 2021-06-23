import { Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";



class CreateUserController {
    async handle(req : Request, res : Response){
        console.log(req.body);
        const { name, email, admin }= req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin});
        // const user = await createUserService.execute({req.body}) ???
        console.log("User: " + user);
        return res.json(user);
    }
}

export {CreateUserController}