import user from './UserModel';
const bcrypt = require('bcrypt');
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
        let { id } = req.params;
        try{
            if(typeof req.body.password != 'undefined'){
                let password = req.body.password;
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password,salt);
                req.body.password = hashPassword;
                let newData = req.body;
                await user.findByIdAndUpdate(id,newData);
                res.send('data update successfully')
            }
            else{
                let newData = req.body;
                await user.findByIdAndUpdate(id,newData);
                res.send('data update successfully')
            }
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
