const product = {
    id:1,
    title: "Iphone 15",
    price: 152000,
    discount: 10
};

function showProduct({title , price = 0, stock = "In Stock"}){
    console.log(`Product Name: ${title}, its Price: ${price} BDT, Stock: ${stock}`);
}

showProduct(product);