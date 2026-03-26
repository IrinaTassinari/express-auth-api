import express from 'express'
import {registerUser, loginUser} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/auth', registerUser )
router.post('/login', loginUser)

export default router