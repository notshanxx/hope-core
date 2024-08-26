import quoteModel from "../models/quote.model.js";





// create 
export const createQuote = async (req, res) => {
    
    
    // console.log(req.userInfo)
    const {name, email} = req.userInfo

    await quoteModel.create({
        quote: req.body.quote,
        info:{
            origin: req.body.origin,
            postedBy: name,
            approved: false,
        }
    })
    
    res.render('dashboard', {submitted: true, name})
}