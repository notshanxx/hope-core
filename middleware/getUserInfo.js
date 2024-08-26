import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const getUserInfo = async (req, res, next) => {

    console.log(req.session.user);
    const decoded = jwt.verify(req.session.user, process.env.JWT_SECRET);
    const userInDB = await UserModel.findById(decoded.id);
    if (!userInDB) {
      return res.redirect("/login");
    }

    

    req.userInfo = userInDB
    console.log(req.userInfo)
    next()

}
