class Product{
    malik="gias uddin";

    details(){
        console.log("")
    }
}

class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
        // console.log('calling the constructor method', name)
    }
    goal() {
        console.log('score a goal')
    }
    getTeamName() {
        return 'Borsa'
    }
}


const player1 = new Player('Tom Brady', 33)
const player2 = new Player('O Shanto', 11)

console.log(player1 instanceof Player)
console.log(player2)

// player1.goal()
// console.log(player1)