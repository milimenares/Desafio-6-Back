import pool from '../../db/config.js'

export const loginUserModel = async (email) => {
    const consulta = {
        text: 'SELECT * FROM usuarios WHERE email = $1',
        values: [email]
    }

    const result = await pool.query(consulta)
    return result.rows[0]
}