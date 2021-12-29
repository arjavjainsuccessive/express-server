import VersionableSchema from "../versionable/versionableSchema";
import extendSchema from 'mongoose-extend-schema';
const userSchema = extendSchema(VersionableSchema,{
    name: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true },
    userId: { type: String, required: true , unique: true },
},{timestamps:true})
export default userSchema;
