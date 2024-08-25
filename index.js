import express, { urlencoded } from "express";
import { connectDB } from "./middleware/connectDB.js";
// import routes
import homeRouter from "./routes/home.route.js";
import apiRouter from "./routes/api.route.js";
import dashboardRouter from "./routes/dashboard.route.js"
import session from 'express-session'

import { callBack, loginController } from "./controllers/auth.controller.js";

const PORT = process.env.PORT
const app = express()
//to be able get req.body
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'pug')
app.set('views', './views')

//session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));


// routes
app.use('/', homeRouter)
app.use('/', apiRouter)
app.use('/', dashboardRouter)
// app.use(express.json())


// login and sign up 

// app.get('/signup', (req,res) =>{
//     res.render('signup')
// })


app.get('/login', loginController)

app.get("/google/callback", callBack);



app.listen(PORT, ()=>{
    
    connectDB()
    console.log('hope da')
})
