import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1627935088955 implements MigrationInterface {
    name = 'CreateTables1627935088955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `jettest`.`operators` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `jettest`.`clients` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `birth` varchar(255) NOT NULL, `value` int NOT NULL, `email` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `operator_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `jettest`.`clients` ADD CONSTRAINT `FK_8bbb6b004e00c1cc87ccdb471c7` FOREIGN KEY (`operator_id`) REFERENCES `jettest`.`operators`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `jettest`.`clients` DROP FOREIGN KEY `FK_8bbb6b004e00c1cc87ccdb471c7`");
        await queryRunner.query("DROP TABLE `jettest`.`clients`");
        await queryRunner.query("DROP TABLE `jettest`.`operators`");
    }

}
