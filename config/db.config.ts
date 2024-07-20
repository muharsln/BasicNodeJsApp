import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = "localhost" as string;
const DB_USER = "username" as string;
const DB_PASSWORD = "Password" as string;
const DB_NAME = "dbname" as string;
const DB_DIALECT = 'mysql' as Dialect;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;