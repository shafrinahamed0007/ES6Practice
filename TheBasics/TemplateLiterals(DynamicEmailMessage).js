const userName = "Rahat";
const product = "Smart Watch";
const price = 2500;
const deliveryFee = 100;


const message = `Hello ${userName}, Your ordered a ${product}. Total Cost is ${price + deliveryFee} BDT.
Status: ${price > 2600 ? "Free Shipping" : "Paid Shipping"}`;

console.log(message);