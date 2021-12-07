import { hasPermission } from "../../../extra";
 export const authMiddleWare = (module,permissionType) =>(req,res,next) =>{
    let token = req.headers['authorization'];
    if(typeof token == 'undefined'){
        next({err:"Unauthorised Token",status:403,message:"Invalid Users"})
    }
 }
