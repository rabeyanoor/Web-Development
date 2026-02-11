// ---

const numbers = [4, 5, 2, 8, 10];

let tem = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  const sum = element + 1;
  tem.push(sum);
}
// console.log(tem);

const newArray1=numbers.map(Number=>console.log(Number));//same
const newArray2=numbers.map(value=>console.log(value))//same
const newArray4 =numbers.map(number =>{
    return number+1
});//same
const newArray3=numbers.map(value=>value+1)
// console.log(newArray1)
// console.log(newArray2)
// console.log(newArray3)
// console.log(newArray4)

const count=[1,2,3,4,5];
const squareArray =count.map(element=>element*element);
const squareArray1 =numbers.map(element=>{
  return element*element
});//same
// console.log(squareArray);


const friends=["rahim","korim","joba","rabeya"];
// const newFriends=friends.map(element=>{
//   return element;
//   //console.log(element)
// })
// console.log(newFriends)


const newFriends=friends.map((element,index)=>{
  
  console.log(element);
  console.log(index);
})


// function doubleIt(num) {
//     // console.log('num now', num)
//     return num * 2;
// }

// const double2 = n => n * 2;

// const result = numbers.map(doubleIt);
// // console.log(result)

// const output = numbers.map(double2)
// // console.log(output)
// const output2 = numbers.map(n => n * 2);

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled)
