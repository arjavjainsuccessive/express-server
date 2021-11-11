
export default function hasPermission(module,role,permissionType){
    if(module == 'getusers' && role == 'trainee' && permissionType == 'read'){
        return 'true';
    }
    else if(module == 'getusers' && role == 'trainer' && (permissionType == 'read' || permissionType == 'write')){
        return 'true';
    }
    else if(module == 'getusers' && role == 'head-trainer'){
        return 'true';
    }
    else{
        return 'false';
    }
}