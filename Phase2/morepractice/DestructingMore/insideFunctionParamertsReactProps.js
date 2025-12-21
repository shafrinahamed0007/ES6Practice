// ফাংশনের ভেতরেই অবজেক্ট ভেঙে ফেলা।
const product = {id:1, title: "Mouse", price: 500, stock:10};

function getSummary({title, price=0, stock=0}){
    return `${title} costs ${price} BDT, Item(s): ${stock}`;
}

console.log(getSummary(product));