import users from "../repositories/user/UserModel";
const bcrypt = require('bcrypt');
class Seed{
  seed =  async () => {
      const user = {
      email: 'arjav@successive.tech',
      name: 'Arjav Jain',
      password: 'ArjavJain2804@',
      role: 'head-trainer',
      userId: 'arjavj.jain',
    };
    try {
      const count = await users.countDocuments();
      if (count === 0) {
        var data = new users(user);
        try{
          await data.save();
        }
        catch(err){
          console.log(err);
        }    
      }
    }
    catch (error) {
      console.log('error is created', error);
    }
  }
}
export default new Seed;
