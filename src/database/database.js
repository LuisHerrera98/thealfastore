import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} = process.env

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
});
