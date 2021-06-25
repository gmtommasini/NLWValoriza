import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624580501538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"compliments",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid"
                    }, 
                    {
                        name: "user_receiver",
                        type: "uuid"
                    }, 
                    {
                        name: "tag_id",
                        type: "uuid"
                    }, 
                    {
                        name: "message",
                        type: "varchar"
                    }, 
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                //creating FK method 1:
                foreignKeys:[{
                    name:"FKUserSenderCompliments",
                    referencedTableName:"users",
                    referencedColumnNames: ["id"],
                    columnNames:["user_sender"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                }]
            })
        )
        // creating FK method 2:
        /* Using this method, we need to includ the FKs removing in the down */
        await queryRunner.createForeignKey(
            "compliments",
            new TableForeignKey(
                {
                    name:"FKUserSenderCompliments",
                    referencedTableName:"users",
                    referencedColumnNames: ["id"],
                    columnNames:["user_sender"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                }
            )
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
