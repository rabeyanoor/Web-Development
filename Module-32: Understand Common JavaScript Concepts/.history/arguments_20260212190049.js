// function sum(a, b, c) {
//   console.log(arguments);// etai push kora jabe na 
// }

// sum(10, 20, 30, 40, 50, 60); 


function sum(a, b, c) {
  const newArg = [...arguments]; // copy kore etay rakha ace . after etay push kora jabe
  console.log(newArg);
}

sum(10, 20, 30, 40, 50, 60);

console.log(typeof sum)
console.log(sum.length)// a,b,c
