import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"


class ListComplimentsReceivedByUserService {
    async execute(user_id: string) {

        if (!user_id) {
            throw new Error("Compliment data error: Destinatary user does not exist.");
        }

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },            
            relations: ["userSender", "userReceiver", "tag"],
        });
        /*  Study note:
            relations makes the joins with the cited objects (attributes)
            the repository is using the entity that has those attributes defined; in this case
            ComplimentsRepositories imported Compliments class which has "userSender", "userReceiver", "tag"
        */

        console.log("ListComplimentsReceivedByUserService, compliments: " + compliments)
        return compliments;
    }
}

export { ListComplimentsReceivedByUserService }