import { createUserModel, getUsersModel } from '../models/createModel.js'

export const createUserController = async (req, res) => {
    try {
        const { email, rol, lenguage, password } = req.body
        const newUser = await createUserModel(email, rol, lenguage, password)
        res.status(201).json({ message: 'Usuario creado', newUser })
    } catch (error) {
        console.log(error)
    }
}

export const getUsersController = async (req, res) => {
    try {
        const usuarios = await getUsersModel()
        res.status(200).json(usuarios)
    } catch (error) {
        console.error('Error en getUsersController:', error)
        res.status(500).json({ message: 'Error al obtener usuarios' })
    }
}
