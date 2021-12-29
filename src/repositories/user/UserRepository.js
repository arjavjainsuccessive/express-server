import user from './UserModel';
const bcrypt = require('bcrypt');
import versionableSchema from '../versionable/versionableRepository';
class UserRepository {
    create = async (req , res) => {
        var users = req.body;
        let result = await versionableSchema.create(users);
        res.send(result);
    }
    delete  = async (req,res) => {
        let { id }  = req.params; 
        let result = await versionableSchema.delete(id);
        res.send(result);
    }
    update = async (req,res) =>{
        let { id } = req.params;
        let data = req.body;
        let result = await versionableSchema.update(id,data);
        res.send(result);
    }
    find = async (req,res) =>{
        let { id } = req.params;
        let result = await versionableSchema.find(id);
        res.send(result);
    }
}
export default new UserRepository;
