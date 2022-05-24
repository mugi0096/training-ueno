import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialize1652938666618 implements MigrationInterface {
    name = 'Initialize1652938666618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`thumbnailPath\` text NOT NULL, \`title\` text NOT NULL, \`body\` text NOT NULL, \`isDist\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
