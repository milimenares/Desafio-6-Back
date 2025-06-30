import pool from '../../db/config.js'
import bcrypt from 'bcrypt'

export const createUserModel = async (email, rol, lenguage, password) => {
    const bcryptPass = bcrypt.hashSync(password, 10)
    const consulta = {
        text: 'INSERT INTO usuarios (email, rol, lenguage, password) VALUES ($1, $2, $3, $4) RETURNING email, rol, lenguage',
        values: [email, rol, lenguage, bcryptPass]
    }
    const respuesta = await pool.query(consulta)
    return respuesta.rows[0]
}

export const getUsersModel = async () => {
    const consulta = 'SELECT email, rol, lenguage FROM usuarios'
    const resultado = await pool.query(consulta)
    return resultado.rows
}