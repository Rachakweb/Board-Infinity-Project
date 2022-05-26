//problem14 

function leftRotate(arr, n, k){
    /* To get the starting point of rotated array */
    let mod = k % n;
 
    // Prints the rotated array from start position
    for (let i = 0; i < n; i++)
    console.log((arr[(mod + i) % n]) + " ");
 
    // console.log("\n");
}
 

let n = 7;
let arr = [ 1 ,2 ,3 ,4, 5, 6, 7];
 
let k = 3;
// Function Call
leftRotate(arr, n, k);
// console.log("<br>");
 