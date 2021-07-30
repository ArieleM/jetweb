import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOperators1627680376215 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "operators",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("operators");
  }
}
