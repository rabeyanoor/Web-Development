function sum(a, b, c) {
  console.log(arguments);
}

sum(10, 20, 30, 40, 50, 60); 
// Output: [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60 }