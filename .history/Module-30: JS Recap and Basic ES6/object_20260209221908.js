 // person.age = 20;
// const person = {
//     name: "hena",
//     age: 10,
//     country:"BD"
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))


// Object.seal(person)
// Object.freeze(person) 


// person.status = "not found";
// console.log(person)


// const person = {
//     name: "hena",
//     age: 10,
//     country:"BD"
// }


// console.log(person["name"])

// for (let key in person) {
//    console.log(` key : ${key}  value: ${person[key]}`)
// }
// console.log(Object.entries(person))

for (let [key,value] of Object.entries(person)) {
    console.log(` key : ${key} value : ${value}`)
}

