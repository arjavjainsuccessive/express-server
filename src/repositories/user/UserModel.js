import userSchema from './UserSchema';
import  mongoose  from 'mongoose';
import bcrypt from "bcrypt";
import autoincrement from 'mongoose-auto-increment';
autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin,'user');
userSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password,salt);
        this.password = hashPassword;
        next();
    }
    catch(err){
        next(err);
    }
})
userSchema.methods.validatePassword = async function validatePassword(data) {
    return await bcrypt.compare(data, this.password);
  };
const User = mongoose.model('user',userSchema);
export default User;
