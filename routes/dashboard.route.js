import express from "express";
import { createQuote } from "../controllers/api.controller.js";
const router = express.Router()


router.get('/dashboard', (req, res) =>{
    res.render('dashboard')
})

router.post('/dashboard', createQuote)

export default router