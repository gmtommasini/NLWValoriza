import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"

// Lets not use interface in this case because the Class has only one attribute
class ListTagsService {
    async execute( ) {

        // const tagsRepositories = getCustomRepository(TagsRepositories);
        // const tagsList = await tagsRepositories.find();

        return await getCustomRepository(TagsRepositories).find();;
    }
}

export { ListTagsService }