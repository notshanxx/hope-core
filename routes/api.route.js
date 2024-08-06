import express from "express";
import { createQuote } from "../controllers/api.controller.js";
import quoteModel from "../models/quote.model.js";

const router = express.Router()

// get all quote
router.get('/api', async (req, res)=>{
    const allQuote = await quoteModel.find()
    if(!allQuote) res.send({message: 'error'})
    res.send(allQuote)
})


// get random
router.get('/api/random', async (req, res) => {
    let randomQuote = await quoteModel.aggregate().sample(1);
    if (!randomQuote) res.send({message: 'error'})
    // console.log(randomQuote);
    res.send(randomQuote)

})


export default router