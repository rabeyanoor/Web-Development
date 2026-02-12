class Product{
    malik="gias uddin";

    constructor(name,price,brand){
        // console.log(name,price,brand)

        this.name=name;
        this.price=price;
        this.brandName=brand;
    }

    details(){
        // console.log("ami details")
        // console.log("ami details",this.name)
        console.log(`ami ${this.name} product er details`)


    }
}

// const iphone=new Product()
// console.log(iphone.details)


const iphone= new Product("iphone","1234","apple");
console.log(iphone)
iphone.details()



const xiaomi=new Product("rerme",1000,"xiaomi",)


// class Player {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.location = 'Bangladesh'
//         // console.log('calling the constructor method', name)
//     }
//     goal() {
//         console.log('score a goal')
//     }
//     getTeamName() {
//         return 'Borsa'
//     }
// }


// const player1 = new Player('Tom Brady', 33)
// const player2 = new Player('O Shanto', 11)

// console.log(player1 instanceof Player)
// console.log(player2)

// // player1.goal()
// // console.log(player1)