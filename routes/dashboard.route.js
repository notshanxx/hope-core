import express from "express";
import { createQuote } from "../controllers/api.controller.js";
import { authenticate } from "../middleware/authenticateUser.js";
import { getUserInfo } from "../middleware/getUserInfo.js";
import quoteModel from "../models/quote.model.js";
const router = express.Router()


router.get('/dashboard' , authenticate, getUserInfo, (req, res) =>{
    const {name} = req.userInfo
    return res.render('dashboard', {name})
})
,
router.post('/dashboard', authenticate, getUserInfo, createQuote)

router.get("/admin", async(req, res) => {
    const allQuotes = await quoteModel.find()
    const quotesApproved = allQuotes.filter((quote) => quote.info.approved);
    const quotesNotApproved = allQuotes.filter((quote) => !quote.info.approved);
    res.render("admin-dashboard",{quotes:allQuotes, quotesApproved, quotesNotApproved});
  });
// router.post("/admin", async(req, res) => {
//     const { id } = req.body;
//     const quote = await quoteModel.findById(id);
//     quote.info.approved = true;
//     await quote.save();
//     res.redirect("/admin");
//   });

  



export default router