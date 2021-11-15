import {validateEmail} from "./helpers";

export default function validateuser(users){
    const valid = [];
    const invalid = [];
    let res = "";
    let userlen = users.length;
    for(var user_iterate=0;user_iterate<userlen;user_iterate++){
        res = validateEmail(users[user_iterate]);
        if (res == true){
        valid.push(users[user_iterate]);
    }
        else{
            invalid.push(users[user_iterate]);
        }
    }
    console.log(`these are valid emails= ${valid}`);
    console.log(`these are invalid emails= ${invalid}`);
    var valid_user = valid.length;
    var invalid_user = invalid.length;
    console.log(`the number of valid user = ${valid_user}`);
    console.log(`the number of invalid user = ${invalid_user}`);
}
