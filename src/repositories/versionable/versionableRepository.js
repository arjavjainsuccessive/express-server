import user from '../user/UserModel';
const bcrypt = require('bcrypt')
class VersionableSchema{
    create = async (data) => {
        data.updatedBy = data.name;
        data.createdBy = data.name;
        var data = new user(data);
        try{
            await data.save();
            return "data save successfully";
        }
        catch(err){
            return (err);
        } 
    }
    delete  = async (data) => {
        try{
            await user.findByIdAndRemove(data);
            return "deleted successfully";
        }
        catch(err){
            return (err);
        }
    }
    update = async (id,data) =>{
        try{
            let users = await user.findById(id);
            if(typeof data.password != 'undefined'){
                let password = data.password;
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password,salt);
                data.password = hashPassword;
                data.updatedBy = users.name;
                let newData = data;
                await user.findByIdAndUpdate(id,newData);
                return 'data update successfully';
            }
            else{
                data.updatedBy = users.name;
                let newData = data;
                await user.findByIdAndUpdate(id,newData);
                return 'data update successfully';
            }
        }
        catch(err){
            return (err);
        }
    }
    find = async (id) =>{
        try{
            if(typeof id != 'undefined'){
                let data = await user.findById(id);
                return (data);
            }
            else{
                let data = await user.find();
                return (data);
            }
        }
        catch(err){
            return (err);
        }
    }
}
export default new VersionableSchema;
