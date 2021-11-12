import {equilateral,pyramid,diamond} from "./pattern";

import {hasPermission,validateuser} from "./utils";

const users = ["trainee1@successive.tech","reviewer1@successive.tech","test123@gmail.com","abcd123.@.com","test.test@gmail.com","demo@outlook.com","123xyz@gmaildotcom"];
validateuser(users);
let res = hasPermission('getusers','trainee','read');
console.log(res);
