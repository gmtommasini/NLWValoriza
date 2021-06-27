import { Request, Response } from "express"
import { CreateTagService } from "../services/CreateTagService";


class CreateTagController {
    async handle(req: Request, res: Response) {
        //console.log(req.body);
        const createTagService = new CreateTagService();
        const { name } = req.body; 
        /* desestruturação do body: 
        const data = req.body; 
        name = data.name */
        const Tag = await createTagService.execute( name );
        // const Tag = await createTagService.execute({req.body}) ???
        //console.log("Tag: " + Tag);
        return res.json(Tag);
    }
}

export { CreateTagController }