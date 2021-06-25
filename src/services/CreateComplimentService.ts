import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute( {tag_id, user_sender, user_receiver, message }:IComplimentRequest) {
        //name mandatory
        if (!user_receiver) {
            throw new Error("Compliment data error: destinatary is mandatory");
        }
        if (user_sender === user_receiver){
            throw new Error("Compliment data error: User cannot self high-five.");
        }

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories =getCustomRepository(UsersRepositories);
        const userReceiver = await usersRepositories.findOne(user_receiver);

        if(!userReceiver){
            throw new Error("Compliment data error: Destinatary user does not exist.");
        }


        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });


        await complimentsRepositories.save(compliment);
        return compliment;
    }
}

export { CreateComplimentService }