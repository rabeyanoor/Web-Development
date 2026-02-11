const products=[
    {id:1,name:"apple",color:"black",price:1200,brand:"apple"},
    {id:2,name:"samsung",color:"gold",price:9000,brand:"apple"},
    {id:3,name:"xiaomi",color:"gold",price:100,brand:"xiaomi"}
];

const newProducts=products.map(p=>{
    if(p.band==="apple"){
        p.price=p.price+100;
    }
    return p;
})
console.log(newProducts)


products.forEach(product=>console.log(product))




products.forEach(product=>{
    if(product.brand=='apple'){
        console.log(product)
    }
}
)