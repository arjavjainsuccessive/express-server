const jwt = require('jsonwebtoken');
const secretKey = 'qwertyuiopasdfghjklzxcvbnm123456';
export class UserController {
    login = (req , res) => {
        var users = req.body;
        let token = jwt.sign(users,secretKey)
        return res.status(200).send({message:"login successfuly",status:200,token:token});
    }
}

