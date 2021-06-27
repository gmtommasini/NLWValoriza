import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { classToPlain } from "class-transformer";
/** classToPlain is being used to hide the password */

class ListUsersService {
    async execute() { 
        
        const usersRepositories = getCustomRepository(UsersRepositories);
        const usersList = await usersRepositories.find();
        
        return classToPlain(usersList);
    }
}

export { ListUsersService }