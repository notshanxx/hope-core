import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";



export const isAdmin = async (req, res, next) => {  

  const decoded = jwt.verify(req.session.user, process.env.JWT_SECRET);
  const userInDB = await UserModel.findById(decoded.id);
  if (!userInDB) {
    return res.redirect("/login");
  }
  if(!userInDB.admin){
    return res.send("your not an admin")
  }
  next()
}


// Will check if logged in or not
export const authenticate = async (req, res, next) => {
  // console.log("token" + req.session.user);

  try {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    const decoded = jwt.verify(req.session.user, process.env.JWT_SECRET);

    const userInDB = await UserModel.findById(decoded.id);
    if (!userInDB) {
      return res.redirect("/login");
    }
    // console.log(userInDB);
    // console.log(decoded.id);

    next();
  } catch (error) {
    console.error("Authentication error:", err);
    return res.redirect("/login");
  }
};
