import { Request, Response } from "express"
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
    async handle(req: Request, res: Response) {
        const listTagsService = new ListTagsService();
        const { name } = req.body; 
        /* desestruturação do body: 
        const data = req.body; 
        name = data.name */
        const Tag = await listTagsService.execute(  );
        // const Tag = await createTagService.execute({req.body}) ???
        //console.log("Tag: " + Tag);
        return res.json(Tag);
    }
}

export { ListTagsController }