const user = {name: "Arif"};

// address না থাকলেও এরর হবে না, ডিফল্ট {} কাজ করবে
const {address: {city = "Unknown"} = {}} = user;
console.log(city);