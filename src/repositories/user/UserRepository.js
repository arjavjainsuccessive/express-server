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
            let { id }  = req.params; 
            await user.findByIdAndRemove(id);
            res.send("deleted successfully");
        }
        catch(err){
            res.send(err);
        }
    }
    update = async (req,res) =>{
        let name = req.body.userId;
        let newData = req.body;
        try{
            await user.findOneAndUpdate(name,newData);
            res.send('data update successfully')
        }
        catch(err){
            res.send(err);
        }
    }
    find = async (req,res) =>{
        let { id } = req.params;
        try{
            if(typeof id != 'undefined'){
                let data = await user.findById(id);
                res.send(data);
            }
            else{
                let data = await user.find();
                res.send(data);
            }
        }
        catch(err){
            res.send(err);
        }
    }
    
}
export default new UserRepository;
