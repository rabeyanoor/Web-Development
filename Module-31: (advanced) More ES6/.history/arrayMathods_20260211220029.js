const products=[
    {id:1,name:"apple",color:"black",price:1200,brand:"apple"},
    {id:2,name:"samsung",color:"gold",price:9000,brand:"apple"},
    {id:3,name:"xiaomi",color:"gold",price:100,brand:"xiaomi"}
];

//
// products.forEach(product =>{
//     if(product.color==="gold"){
//         console.log(product )
//     }

// })

const newProducts=products.filter(product=>product.price>1300);
console.log(newProducts)




// find first a j thakbe takai print korbe . er pore r kao find korbe na
const product=products.find(p=>p.color==="gold");// products er sob valu p te jabe. er pore er vitir theke firse gold ta nibe . baki gulo bad.
console.log(product)

