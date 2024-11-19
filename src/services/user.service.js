import pool from '../databases/index.js'

export const getAllUser = async() => {
    const allData = await pool.query(`SELECT * FROM users`)
    return  allData
}