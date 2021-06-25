
import {EntityRepository, Repository} from "typeorm"
import { Compliment } from "../entities/Compliment"

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment>{
    /* UsersRepositories is a class related to Compliment table through EntityRepository
    and it extends Repository<> which contains all useful methods   */
}

export { ComplimentsRepositories}