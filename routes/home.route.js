import express from "express";
import quoteModel from "../models/quote.model.js";
const router = express.Router()

router.get('/', async (req, res)=>{
    const allQuotes = await quoteModel.find()
    console.log('home')
    res.render('index',{quotes:allQuotes})
})


export default router