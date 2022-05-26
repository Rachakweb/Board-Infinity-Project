//problem10
var l=prompt("Enter the length of an array");
var arr=[];
var ele;
var res=[];
var final=[];
for(let i=0;i<l;i++){
  ele=prompt('enter array element');
  arr.push(ele);
}
res=arr.filter((x,i)=>i%2==0).sort((a,b)=>a-b);
for(let k=0;k<arr.length;k++){
  if(k%2==0){
    final.push(res.shift());
  }
  else{
    final.push(arr[k])
  }
}
console.log(final)