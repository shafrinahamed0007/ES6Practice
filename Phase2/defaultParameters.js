const calculateTotal = (price, tax = 0.05) => price + (price * tax);
console.log(calculateTotal(1000));
console.log(calculateTotal(1000,0.10));