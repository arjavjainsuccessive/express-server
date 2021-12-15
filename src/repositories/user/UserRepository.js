import user from './UserModel';
import userSchema from './UserSchema';
class UserRepository{
    create = async (req , res) => {
        var users = req.body;
        var data = new user(users);
        try{
            await data.save();
            res.send("data save successfully");
        }
        catch(err){
            res.send(err);
        } 
    }
    delete  = async (req,res) => {
        try{
            var name = req.body;
            await user.findOneAndDelete(name);
            res.send("deleted successfully");
        }
        catch(err){
            res.send(err);
        }
    }
    update = async (req,res) =>{
        var name = req.body.userId;
        var newData = req.body;
        try{
            await user.findOneAndUpdate(name,newData);
            res.send('data update successfully')
        }
        catch(err){
            res.send(err);
        }
    }
    find = async (req,res) =>{
        var name = req.body;
        try{
            var data = await user.findOne(name);
            res.json(data);
        }
        catch(err){
            res.send(err);
        }
    }
    
}
export default new UserRepository;
