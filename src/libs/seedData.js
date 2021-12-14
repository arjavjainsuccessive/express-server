import users from "../repositories/user/UserModel";
const bcrypt = require('bcrypt');
export  const seed =  async (req,res,next) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash('Trainner@123', salt);

  const user = {
    email: 'arjav@successive.tech',
    name: 'Arjav Jain',
    password: hash,
    role: 'head-trainer',
    userId: 'arjavj.jain',
  };
   
    try {
      const count = await users.countDocuments();
      if (count === 0) {
        var data = new users(user);
        try{
            await data.save();
            res.send("data save successfully");
        }
        catch(err){
            res.send(err);
        }    
      }
      else{
          next();
      }
    } catch (error) {
      console.log('error is created', error);
    }
};
