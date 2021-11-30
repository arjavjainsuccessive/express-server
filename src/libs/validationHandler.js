const validationHandler = (config) => (req, res, next) => {
    const errMsg = [];
    let flag = false;
    for(const key in config){
      flag = false;
      const dataPlace = config[key].in;
      const input = req[dataPlace][key];
      for (const keyProperty in config[key]){
        switch (keyProperty){
          case 'required':
            if((key in req[dataPlace]) && input !== null ){
              break;
            }
            else{
              errMsg.push(`${key} is required`);
              flag = true;
            }
            break;
          case 'string':
            if(typeof input != 'undefined'){
              if(key in req[dataPlace] && typeof input === 'string'){
                break;
              }
              else{
                errMsg.push(`${key} is required in string`);
                flag = true;
                break;
              }
            }
            
        }
      }
    }
    console.log("Error Message",errMsg);
    next();
  }
  export default validationHandler;
