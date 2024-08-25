import express from "express";
import { createQuote } from "../controllers/api.controller.js";
import { authenticate } from "../middleware/authenticateUser.js";
const router = express.Router()


router.get('/dashboard' , authenticate, (req, res) =>{
    res.render('dashboard')
})

router.post('/dashboard', authenticate, createQuote)

export default router