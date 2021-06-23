import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        //email mandatory
        if (!email) {
            throw new Error("User data error: email is mandatory");
        }
        const usersRepositories = new UsersRepositories;
        const userAlreadyExists = await usersRepositories.findOne({
            email //do I need the comma at the end?
        })
        if (userAlreadyExists) {
            throw new Error("User data error: email already in use");
        }
        const user = usersRepositories.create({
            name, email, admin
        })

        await usersRepositories.save(user)


    }
}

export { CreateUserService }