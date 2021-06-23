
import {EntityRepository, Repository} from "typeorm"
import {User} from "../entities/User"

@EntityRepository(User)
class UsersRepositories extends Repository<User>{
    /* UsersRepositories is a class related to User tabel through EntityRepository
    anb it extends Repository<> which contains all useful methods   */
}

export { UsersRepositories}