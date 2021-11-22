export default function diamond(node){
  let diamond_star = "";
    for (let row = 1; row <= node; row++) {
      for (let column = node; column > row; column--) {
        diamond_star += " ";
      } 
      for (let column_star = 0; column_star < row; column_star++) {
        diamond_star += "* ";
      }
      diamond_star += "\n";
    }
    for (let row = 0; row <= node-1 ; row++) {
      for (let column = 0; column < row; column++) {
        diamond_star += " ";
      }
      for (let column_star = (node - row); column_star > 0; column_star--) {
        diamond_star += "* ";
      }
      diamond_star += "\n";
    }
  console.log(diamond_star);
}
