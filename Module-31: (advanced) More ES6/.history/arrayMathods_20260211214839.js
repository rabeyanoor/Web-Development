const products=[
    {id:1,name:"apple",color:"black",price:1200,brand:"apple"},
    {id:2,name:"samsung",color:"gold",price:9000,brand:"apple"},
    {id:3,name:"xiaomi",color:"gold",price:100,brand:"xiaomi"}
];
products.forEach(product =>{
    if(product.color==="gold"){
        console.log(product )
    }

})

const newPro