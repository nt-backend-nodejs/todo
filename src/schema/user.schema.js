import { logger } from '../../utils/logger.js'
import pool from '../../database/index.js'
export const createUserTable = async () => {
    try {
        // await pool.query(`
        //     CREATE TYPE USER_ROLE AS ENUM ('user', 'admin', 'manager');
        //     `)
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR,
                email VARCHAR UNIQUE NOT NULL,
                password VARCHAR NOT NULL,
                
            )`)
    } catch (error) {
        logger.error(error)
    }
};
