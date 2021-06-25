import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";

import { v4 as uuid } from "uuid" //cada verssao funciona de um modo diferente. Deveria pesquisar sobre isso.
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments") //this class Compliment relates to compliments table in the DB
class Compliment {
    //Nessa funções de relacionamento eu posso colocar o nome da coluna no BD se o nome na classe for diferente: @Column(name)...
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    @JoinColumn({name:"user_sender"})
    @ManyToOne( ()=>User ) 
    userSender: User;

    @Column()
    user_receiver: string;
    @JoinColumn({name:"user_receiver"})
    @ManyToOne( ()=>User ) 
    userReceiver: User;

    @Column()
    tag_id: string;
    @JoinColumn({name:"tag_id"})
    @ManyToOne( ()=>Tag )  //Many compliments may use the same tag
    tag: Tag;
    // https://typeorm.io/#/relations/joincolumn-options 

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;
    

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment };
