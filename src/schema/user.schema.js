import pool from '../databases/index.js'
// User table
export const createUserTable = async () => {
    try {
        await pool.query(
            `CREATE TYPE IF NOT EXISTS user_role AS ENUM('user','admin','superAdmin')`
        )
        await pool.query(
            `CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR,
                username VARCHAR UNIQUE NOT NULL,
                email VARCHAR UNIQUE NOT NULL,
                password VARCHAR NOT NULL,
                role user_role DEFAULT 'user',
                is_active BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`
        )
    } catch (error) {
        logger.error(error)
    }
}