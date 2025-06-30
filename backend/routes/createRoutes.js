import { Router } from 'express'
import { createUserController, getUsersController } from '../src/controllers/createController.js'

const router = Router()

router.post('/usuarios', createUserController)
router.get('/usuarios', getUsersController)

export default router
