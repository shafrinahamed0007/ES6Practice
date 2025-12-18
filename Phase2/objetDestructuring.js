const company = {
    name:"Tech Solutions",
    ceo: "Abid Khan",
    address: {
        city:"Dhaka",
        area: "Banani"
    }
};

// Nested extraction + variable renaming
const {name: companyName, address: {area}, ceo: malik} = company;
console.log(companyName);
console.log(area);
console.log(malik);