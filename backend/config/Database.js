import { Sequelize } from "sequelize";

const db = new Sequelize("tes_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
