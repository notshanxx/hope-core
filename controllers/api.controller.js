import quoteModel from "../models/quote.model.js";

// create 
export const createQuote = async (req, res) => {
    await quoteModel.create({
        quote: req.body.quote,
        info:{
            origin: req.body.origin
        }
    })
    
    res.render('dashboard', {submitted: true})
}