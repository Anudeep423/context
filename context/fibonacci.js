

// 1 1 2 3 5 8 13



var  arr = new Array(10);
console.log(arr);

var ar = [1,2,2,3,3,4,5,5,5];

var new_arr = []

ar.map( (val,i) => {
   
    if(new_arr.indexOf(val) === -1  ){
        new_arr.push(val)
    }
} )

console.log(new_arr);


// arr.map( (val,i) => {
//     if(i > 1){
//     console.log( )
//     arr[i]  = arr[i-1]  + arr[i-2] 
//     }
// } )

// console.log(arr);