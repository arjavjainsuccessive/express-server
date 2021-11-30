const validationHandler = (config) => (req, res, next) => {
    const errMsg = [];
    let flag = false;
    for (const keyProperty in config[key]) {
      switch (keyProperty) {
        case 'required':
          if ((key in req[dataPlace]) && input !== null) {
            break;
          } else if (config[key][keyProperty] === false) {
            dataPlace.forEach((inKey) => {
              req[inKey][key] = config[key].default;
            });
          } else {
            errMsg.push(`${key} is required`);
            flag = true;
          }
          break;
      }
      for (const key in config) {
        flag = false;
        const dataPlace = config[key].in;
        const input = req[dataPlace][key];
        for (const keyProperty in config[key]) {
          switch (keyProperty) {
            case 'required':
              if ((key in req[dataPlace]) && input !== null) {
                break;
              } else if (config[key][keyProperty] === false) {
                dataPlace.forEach((inKey) => {
                  req[inKey][key] = config[key].default;
                });
              } else {
                errMsg.push(`${key} is required`);
                flag = true;
              }
              break;
          }
        }
      }
    }
  }
  export default validationHandler;
