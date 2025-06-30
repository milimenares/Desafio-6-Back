import { loginUserModel } from '../models/authModel.js'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body
        const usuario = await loginUserModel(email)
        if (!usuario) {
        return res.status(401).json({ message: 'Usuario no encontrado' })
        }
        const passwordCorrecta = bcrypt.compareSync(password, usuario.password)
        if (!passwordCorrecta) {
        return res.status(401).json({ message: 'Contraseña incorrecta' })
        }

        const token = jwt.sign({ email }, process.env.JWTprivate, {
            expiresIn: '60s'
        })

        res.status(200).json({ token })
    } catch (error) {
        console.error('Error en loginController:', error)
        res.status(500).json({ message: error.message })
    }
}