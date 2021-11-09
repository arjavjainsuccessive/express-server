const users = ["arjav@gmail.com","trainer1@gmail.com","r121","a1@","g3gmail.com"];
validateuser(users);
function validateuser(users){
    const valid = [];
    const invalid = [];
    let res = "";
    userlen = users.length;
    for(var i=0;i<userlen;i++){
        res = validateEmail(users[i]);
        if (res == "true"){
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
function validateEmail(email){
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(mailformat)){
        return "true";
    }
    else{
        return "false";
    }
}