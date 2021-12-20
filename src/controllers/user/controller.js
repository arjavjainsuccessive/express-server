const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
import User from '../../repositories/user/UserModel';
export var secretKey = require('dotenv').config().parsed.SECRET_KEY;
export let token;
export class UserController {
    login = async (req , res, next) => {
        var {email,password} = req.body;
        const authUser = await User.findOne({ email });
        if (authUser && (await authUser.validatePassword(password))){
            token = jwt.sign(authUser.toJSON(),secretKey);
            next();
        }
        else{
            res.send("Invalid User email or password");
        }
    }
}
