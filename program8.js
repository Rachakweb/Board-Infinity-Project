//problem8
let string = prompt('Enter a string');
let length_without_whitespaces = string.replace(/\s/g,"")
console.log(length_without_whitespaces.length);