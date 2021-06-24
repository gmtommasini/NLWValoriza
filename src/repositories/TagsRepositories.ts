
import {EntityRepository, Repository} from "typeorm"
import { Tag } from "../entities/Tag"

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag>{
    /* UsersRepositories is a class related to Tag table through EntityRepository
    and it extends Repository<> which contains all useful methods   */
}

export { TagsRepositories}