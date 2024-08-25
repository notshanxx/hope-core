import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
    console.log("token" + req.session.user)

    try {
        if (!req.session.user) {
            return res.redirect('/login');
          }
    
      
        const decoded = jwt.verify(req.session.user, process.env.JWT_SECRET);
    
        const userInDB = await UserModel.findById(decoded.id);
        if (!userInDB) {
          return res.redirect('/login');
        }
        console.log(userInDB)
        console.log(decoded.id)
    
        next()
    
        
    } catch (error) {
        console.error('Authentication error:', err);
    return res.redirect('/login');
    }

    
    // await jwt.verify(req.session.user, process.env.JWT_SECRET, (err, user) => {
    //   if (err) {
    //     console.log(err)
    //     return res.redirect("/login");
    //   }

    //   if (userInDB._id) {
    //     return next();
    //   }
    // });
  

    // return res.redirect("/login");
  

};
