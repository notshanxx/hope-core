import express from "express";
import { connectDB } from "./middleware/connectDB.js";
// import routes
import homeRouter from "./routes/home.route.js";
import apiRouter from "./routes/api.route.js";

const PORT = process.env.PORT
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

// routes
app.use('/', homeRouter)
app.use('/', apiRouter)


app.listen(PORT, ()=>{
    
    connectDB()
    console.log('hope da')
})
