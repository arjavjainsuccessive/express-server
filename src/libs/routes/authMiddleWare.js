import { hasPermission } from "../../../extra";
import { token } from "../../controllers/user/controller";
import  Jwt  from "jsonwebtoken";
import { secretKey } from "../../controllers/user/controller";
export let userRole;
    const authMiddleWare = (module,permissionType) => async (req , res, next) => {
       if(typeof token == 'undefined'){
           next({err:"Unauthorised Token",status:403,message:"Invalid Users"})
       }
       else{
            const userInfo = Jwt.verify(token,secretKey);
            if(userInfo.role == 'trainer'){
                let result =  hasPermission('getusers',userInfo.role,'read')
                if(result){
                    res.status(200).json({message:"login successfuly",status:200,token:token});
                }
                else{
                    res.send('do not authorised');
                }
            }
        }
    }
    export default authMiddleWare;
