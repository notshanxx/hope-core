import mongoose from "mongoose"
const MONGODB = process.env.MONGODB
export const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB)
        console.log('Connected to MONGODB')
    } catch (error) {
        console.log('Failed connecting to MONGODB' + error)
        process.exit(1)
    }

}