import {Entity, PrimaryColumn,Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid" //cada verssao funciona de um modo diferente. Deveria pesquisar sobre isso.

@Entity("users") //this class User relates to users table in the DB
export class User {
    //Nessa funções de relacionamento eu posso colocar o nome da coluna no BD se o nome na classe for diferente: @Column(name)...
    @PrimaryColumn()
    readonly id:string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    admin: boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

//alternatively I can export:
// export { User };
