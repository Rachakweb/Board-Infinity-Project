
// problem13 
// Function to find the nth term of series
function term(n)
{
     
    // Loop to add numbers
    let ans = 1;
    for(let i = 1; i <= n; i++)   
        ans = (i*i)+i;
     
    return ans;
}
 
// Driver code
let n = 5;
 
console.log(term(n));