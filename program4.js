//problem4
let month = parseInt(prompt("Enter a number of month"));
switch(month){
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("This month has 31 days");
    break;

  case 4: case 6: case 9: case 11:
    console.log("This month has 30 days");
  break;
  case 2:
    console.log("This month has 28 days");
    break;
  default:
    console.log("please enter a valid number of months")
    break;
}
