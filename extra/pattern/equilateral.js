export default function equilateral(node){
  let equilateral_star = "";
  for (let row = 1; row <= node; row++) {
    for (let column = node; column > row; column--) {
      equilateral_star += " ";
    }
    for (let column_star = 0; column_star < row; column_star++) {
      equilateral_star += "* ";
    }
    equilateral_star += "\n";
  }
  console.log(equilateral_star);  
}
