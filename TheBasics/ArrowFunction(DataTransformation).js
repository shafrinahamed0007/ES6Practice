// Normal Function
function calculatesDiscount(price){
    return price * 0.9;
}

// Arrow function (single line & implicit return)
const getDiscount = price => price * 0.9;
console.log(getDiscount(1000));