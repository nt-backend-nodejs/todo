import { logger } from '../../utils/logger.js'
import pool from '../../database/index.js'

export const createTodoTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS to_do (
                id SERIAL PRIMARY KEY,
                title VARCHAR NOT NULL,
                description TEXT,
                is_completed BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `)
        logger.info('ToDo jadvali muvaffaqiyatli yaratildi.')
    } catch (error) {
        logger.error(error)
    }
}
