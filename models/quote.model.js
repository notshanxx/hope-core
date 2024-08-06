import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        require: true
    },
    upvotes: {
        type: Number,
        require: true,
        default: 0
    },
    info: {
        postedBy: {
            type: String,
            default: "marco"
        },
        postDate: {
            type: Date,
            default: new Date()
        }
    }
})

export default mongoose.model('quotes', QuoteSchema)

