import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import {hash} from "bcryptjs"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) { //users are not admin by default
        //email mandatory
        if (!email) {
            throw new Error("User data error: email is mandatory");
        }

        const passwordHash = await hash(password, 8);
        const usersRepositories = getCustomRepository(UsersRepositories);
        const userAlreadyExists = await usersRepositories.findOne({
            email //do I need the comma at the end?
        })
        if (userAlreadyExists) {
            throw new Error("User data error: email already in use");
        }
        const user = usersRepositories.create({
            name, 
            email, 
            admin, 
            password : passwordHash //because the field and the value variable have different names, we neet to use key:value notation
        })

        await usersRepositories.save(user)

        return user;
    }
}

export { CreateUserService }