import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer";

// Lets not use interface in this case because the Class has only one attribute
class ListTagsService {
    async execute() {

        const tagsRepositories = getCustomRepository(TagsRepositories);
        //  let tagsList = await tagsRepositories.find();
        //  tagsList = tagsList.map( (tagObj)=>({ ...tagObj, hasgTag: `#${tagObj.name}`} ));
        // return await getCustomRepository(TagsRepositories).find(); //works as well
        
        const tagsList =  await tagsRepositories.find();
        return classToPlain(tagsList);
    }
}

export { ListTagsService }