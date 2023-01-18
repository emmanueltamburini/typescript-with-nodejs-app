import { Sequelize } from 'sequelize';
import { DIALECT_BD } from '../constants/paramsQueries.constant';
import dotenv from 'dotenv'

dotenv.config();
let db: Sequelize | null = null; 

if (!!process.env.DB_NAME && !!process.env.DB_USER) {
    db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: DIALECT_BD
    });
}

export default db;