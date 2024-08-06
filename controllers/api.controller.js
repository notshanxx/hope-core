import quoteModel from "../models/quote.model.js";


export const createQuote = async (req, res) => {
    await quoteModel.create({
        quote: "In the darkest days, Hope is what you give to your self"
    })
    res.send(await quoteModel.find())
}