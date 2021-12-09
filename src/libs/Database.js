var mongoose = require('mongoose');
class Database{
    open(DbUrl){
        let flag;
       flag = mongoose.connect(DbUrl)
        .then( ()=> {
            console.log("Conncected successfully")
       return true;
     })
        .catch( (err) => {
            console.log(err);
            return false;
        });
        return flag;
    }
    disconnect(){
        mongoose.connection.close()
    }
}

export default new Database;