import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"

// Lets not use interface in this case because the Class has only one attribute
class CreateTagService {
    async execute( name: string) {
        //name mandatory
        if (!name) {
            throw new Error("Tag data error: name is mandatory");
        }

        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tagAlreadyExists = await tagsRepositories.findOne({
            name //do I need the comma at the end?
        })
        if (tagAlreadyExists) {
            throw new Error("Tag data error: name already in use");
        }

        const tag = tagsRepositories.create({
            name
        });
        await tagsRepositories.save(tag);
        return tag;
    }
}

export { CreateTagService }