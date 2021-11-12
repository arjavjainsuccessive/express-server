import {validateEmail} from "./helpers";
export default function validateuser(users){
    const valid = [];
    const invalid = [];
    let res = "";
    let userlen = users.length;
    for(var i=0;i<userlen;i++){
        res = validateEmail(users[i]);
        if (res == true){
        valid.push(users[i]);
    }
        else{
            invalid.push(users[i]);
        }
    }
    console.log(`these are valid emails= ${valid}`);
    console.log(`these are invalid emails= ${invalid}`);
    var valid_user = valid.length;
    var invalid_user = invalid.length;
    console.log(`the number of valid user = ${valid_user}`);
    console.log(`the number of invalid user = ${invalid_user}`);
}
