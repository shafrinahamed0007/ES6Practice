// অ্যারে থেকে প্রথম কয়েকটি তথ্য নিয়ে বাকিগুলো আলাদা রাখা।

const csvRow = ["Zayan", "Ahamed", "Dhaka", "Bangladesh", "Develop", "React"];

// প্রথম ও শেষ নাম আলাদা, বাকি সব 'locationAndJob' অ্যারেতে

const [firstName, lastName, ...locationAndJob] = csvRow;
console.log(firstName);
console.log(lastName);
console.log(locationAndJob);

const [area, country, ...jobInfo] = locationAndJob;
console.log(area);
console.log(country);
console.log(jobInfo);
