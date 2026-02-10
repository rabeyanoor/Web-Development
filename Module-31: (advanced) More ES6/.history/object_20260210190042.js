const person = {
    name: "hena",
    age: 30,
    1:"100",
    true:"qqewre",
    friends: ["korim", "hero alom"],
    details: {
        job: "yes",
        isMarrid: true,
        status: "not found"
    }
}

console.log(person[1])
console.log(person[])
console.log(person.name)
console.log(person.friends[1]);
console.log(person.details.job)
console.log(person["details"]['job']) //same
console.log(person.details.mother?.name)// mother name kicu nai . tao error dibe na. undefine dibe