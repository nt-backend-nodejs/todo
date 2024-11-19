import pool from '../databases/index.js'
// User table
export const createUserTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR,
                username VARCHAR UNIQUE NOT NULL,
                email VARCHAR UNIQUE NOT NULL,
                password VARCHAR NOT NULL
            )`
        )
    } catch (error) {
        logger.error(error)
    }
}