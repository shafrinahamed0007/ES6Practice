const product = {
    id:1,
    title:"iPhone 15",
    price: 165000,
    discount: 10
};

function showProduct({title, price=0,  stock = "In Stock"}){
    console.log(`Product Name: ${title}`);
    console.log(`Price: ${price} BDT`);
    console.log(`Status: ${stock}`);
};

showProduct(product);