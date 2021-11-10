pyramid(5,'fullpyramid')
function pyramid(row,type){
    if(type=='halfpyramid'){
        let n = row;
        let string = "";
        for (let i = 1; i <= n; i++) {
            for (let k = 1; k <= i; k++) {
                string += `${k} `;
            }
            string += "\n";
        }   
        console.log(string);
    }
    else if(type == 'fullpyramid'){
        let n = row;
            let string = "";
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= n - i; j++) {
                    string += "  ";
                }
                let m = i;
                let r = 2*i-2;
                for (let k = 1; k <= 2 * i - 1; k++) {
                    if(k<=i){
                        string += `${m} `;
                        m+=1;
                    }
                    else{
                        string+=`${r} `;
                        r = r-1;
                    }
    
                }
                string += "\n";
            }
            console.log(string);

    }
    else if(type == 'differentpyramid'){
        let n = row;
        let string = "";
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= 2*n -1 - i; j++) {
                string +="*";
            }
            for (let k = 1; k <=  i ; k++) {
                string += `${i}*`;
            }
            for(let k=7;k>= i;k--){
                string+="*"
            }
            string += "\n";
        }
        console.log(string);
    }
}