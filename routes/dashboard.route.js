import express from "express";
import { createQuote } from "../controllers/api.controller.js";
import { authenticate, isAdmin } from "../middleware/authenticateUser.js";
import { getUserInfo } from "../middleware/getUserInfo.js";
import quoteModel from "../models/quote.model.js";
const router = express.Router()


router.get('/dashboard' , authenticate, getUserInfo, (req, res) =>{
    const {name} = req.userInfo
    return res.render('dashboard', {name})
})
,
router.post('/dashboard', authenticate, getUserInfo, createQuote)

router.get("/admin", isAdmin, async(req, res) => {
    const allQuotes = await quoteModel.find()
    const quotesApproved = allQuotes.filter((quote) => quote.info.approved);
    const quotesNotApproved = allQuotes.filter((quote) => !quote.info.approved);
    res.render("admin-dashboard",{quotes:allQuotes, quotesApproved, quotesNotApproved});
  });

router.post('/admin', isAdmin , async(req, res) => {
  // Handle the case where no checkboxes were selected
  const selectedItems = req.body.options;
  const approveIt = req.body.approveIt
  console.log(selectedItems)
  // Handle the case where no checkboxes were selected
  if (!selectedItems) {
      return res.send('No items selected.');
  }
  console.log(selectedItems.length)
  console.log(approveIt)



  if(typeof selectedItems === 'string'){
    await quoteModel.findByIdAndUpdate(selectedItems, { "info.approved": approveIt })
      .then(() => console.log(`Quote with id ${selectedItems} approved`))
      .catch(err => console.log(err))
  }

// weird why whe clicking only one list return an string when more than one it return array
/* 
CHATGPT explaination
No, if only one checkbox is selected, it does not send an array. It sends a single string value. When multiple checkboxes are selected, it sends an array.
*/

  await Promise.all(
    Array.isArray(selectedItems) ? selectedItems.map(id => 
      quoteModel.findByIdAndUpdate(id, { "info.approved": approveIt })
        .then(() => console.log(`Quote with id ${id} approved`))
        .catch(err => console.log(err))
    ) : []
  );


  // Log or process the selected items
  console.log('Selected items:', selectedItems);
  
  // Send a response
  res.send(selectedItems);
});

  



export default router