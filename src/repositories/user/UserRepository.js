import user from './UserModel';
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
}
export default new UserRepository;
