import {Entity, PrimaryColumn,Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

import { v4 as uuid } from "uuid" //cada verssao funciona de um modo diferente. Deveria pesquisar sobre isso.

@Entity("tags") //this class Tag relates to tags table in the DB
class Tag {
    //Nessa funções de relacionamento eu posso colocar o nome da coluna no BD se o nome na classe for diferente: @Column(name)...
    @PrimaryColumn()
    readonly id:string;
    @Column()
    name: string;
    
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

export { Tag };
