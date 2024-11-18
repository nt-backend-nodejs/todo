import { Router } from 'express'

export const authRouter = new Router()

authRouter.post('/register')
authRouter.post('/login')
