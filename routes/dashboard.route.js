import express from "express";
import { createQuote } from "../controllers/api.controller.js";
import { authenticate } from "../middleware/authenticateUser.js";
import { getUserInfo } from "../middleware/getUserInfo.js";
const router = express.Router()


router.get('/dashboard' , authenticate, (req, res) =>{
    return res.render('dashboard')
})

router.post('/dashboard', authenticate, getUserInfo, createQuote)

export default router