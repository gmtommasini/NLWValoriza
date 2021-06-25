import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAutenticateRequest {
    email: string,
    password: string,
}

export class AutenticateUserService {

    async execute({ email, password }: IAutenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({ email });

        //verify if email is registered
        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        //verify password
        if (!(await compare(password, user.password))) {
            throw new Error("Email/Password incorrect");
        }
        // password pass
        const token = sign(
            {
                email: user.email //payload
            },
            "someHashCodeHere",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return token

    }
}