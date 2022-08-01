// first function
function add7(number) {
  sum = number + 7;
  return sum;
}

console.log(add7(8))

// second function
function multiply(num1,num2){
  result = num1 * num2;
  return result;
}

console.log(multiply(3,4))

//third function 
function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
  
}

console.log(capitalize("testing this function"))