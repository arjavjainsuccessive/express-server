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
    console.log(string);