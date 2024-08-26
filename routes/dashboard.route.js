import express from "express";
import { createQuote } from "../controllers/api.controller.js";
import { authenticate } from "../middleware/authenticateUser.js";
import { getUserInfo } from "../middleware/getUserInfo.js";
const router = express.Router()


router.get('/dashboard' , authenticate, getUserInfo, (req, res) =>{
    const {name} = req.userInfo
    return res.render('dashboard', {name})
})
,
router.post('/dashboard', authenticate, getUserInfo, createQuote)

export default router