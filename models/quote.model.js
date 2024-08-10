import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        require: true
    },
    info: {
        approved: {
            type: Boolean,
            default: false
        },
        origin: {
            type: String,
            default: "unknown"
        },
        postedBy: {
            type: String,
            default: "marco"
        },
        upvotes: {
            type: Number,
            require: true,
            default: 0
        }
    }
})

export default mongoose.model('quotes', QuoteSchema)

