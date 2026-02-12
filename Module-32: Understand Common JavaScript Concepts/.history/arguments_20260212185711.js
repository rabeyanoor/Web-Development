function sum(a, b, c) {
  console.log(arguments);// etai push kora jabe na 
}

sum(10, 20, 30, 40, 50, 60); 


function sum(a, b, c) {
  const newArg = [...arguments]; // copy kore etay rakha ace . after 
  console.log(newArg);
}

sum(10, 20, 30, 40, 50, 60);
