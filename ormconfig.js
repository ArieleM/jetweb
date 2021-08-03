console.log(process.env.CLEARDB_DATABASE_URL);
module.exports = {
  type: "mysql",
  url: process.env.CLEARDB_DATABASE_URL,
  migrations: ["dist/database/migrations/*.js"],
  entities: ["dist/entities/*.js"],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/entities",
  },
};
