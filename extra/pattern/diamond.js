let node = 5;
    let string = "";
    for (let i = 1; i <= node; i++) {
      for (let j = node; j > i; j--) {
        string += " ";
      }
      for (let k = 0; k < i; k++) {
        string += "* ";
      }
      string += "\n";
    }
    for (let i = 0; i <= node-1 ; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = (node - i); k > 0; k--) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);