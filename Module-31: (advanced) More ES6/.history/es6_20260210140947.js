// const and let

const person = {
  name: "gias",
  age: 12
};

const { age, name } = person;
console .log(age,name)

// array
const friends = ["rahim", "Bangladesh", "krim"];

// array destructuring
const [frist, second] = friends;


// spread operator
const newFriends = ["hero alom", ...friends];
// console.log(newFriends);

// template string
console.log(`
amar shonar ${friends[1]} ami tomai valo bashi
`);
