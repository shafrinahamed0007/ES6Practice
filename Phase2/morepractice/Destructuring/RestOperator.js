// ১. ফাংশন আর্গুমেন্ট সংগ্রহ
function calculateTotal(...prices){
    return prices.reduce((total, n) => total + n,0);
}

console.log(calculateTotal(100,200,300,400));

// ২. অবজেক্ট ক্লিনিং (নির্দিষ্ট কিছু বাদ দেওয়া)
const car ={
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    owner: "Elon"
};

const {owner, ...carInfo} = car;
console.log(carInfo);