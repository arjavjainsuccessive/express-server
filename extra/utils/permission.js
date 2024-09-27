var permissions = {
    'getusers':{
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
    }
};
res = hasPermission('getusers','head-trainer','write')
console.log(res)

res = hasPermission(permissions.getusers);
function hasPermission(module,role,permissionType){
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