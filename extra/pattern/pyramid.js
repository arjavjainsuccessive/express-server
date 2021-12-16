export default function pyramid(node,type){
    if(type=='halfpyramid'){
        let pyramid_pattern = "";
        for (let row = 1; row <= node ; row++) {
            for (let column = 1; column <= row; column++) {
                pyramid_pattern += `${column} `;
            }
            pyramid_pattern += "\n";
        }   
        console.log(pyramid_pattern);
    }
    else if(type == 'fullpyramid'){
            let fullpyramid_pattern = "";
            for (let row = 1; row <= node; row++) {
                for (let column = 1; column <= node - row; column++) {
                    fullpyramid_pattern += "  ";
                }
                let odd_half = row;
                let even_half = 2*row-2;
                for (let column = 1; column <= 2 * row - 1; column++) {
                    if(column<=row){
                        fullpyramid_pattern += `${odd_half} `;
                        odd_half+=1;
                    }
                    else{
                        fullpyramid_pattern+=`${even_half} `;
                        even_half = even_half-1;
                    }
                }
                fullpyramid_pattern += "\n";
            }
            console.log(fullpyramid_pattern);

    }
    else if(type == 'differentpyramid'){
        let differentpyramid = "";
        for (let row = 1; row <= node; row++) {
            for (let column = 1; column <= 2*node -1 - row; column++) {
                differentpyramid +="*";
            }
            for (let column = 1; column <=  row ; column++) {
                differentpyramid += `${row}*`;
            }
            for(let column=node+2;column>= row;column--){
                differentpyramid+="*"
            }
            differentpyramid += "\n";
        }
        console.log(differentpyramid);
    }
}
