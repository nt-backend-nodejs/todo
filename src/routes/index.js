import express from 'express'
import {
    registerController,
    loginController,
    verifyController,
} from '../controller/index.js'

export const authRouter = express.Router()

authRouter.post('/register', registerController)
authRouter.post('/login', loginController)
authRouter.post('/verifyToken', verifyController)


