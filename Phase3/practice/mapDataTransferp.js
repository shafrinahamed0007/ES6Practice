// 1.নামের তালিকা তৈরি: অবজেক্টের অ্যারে থেকে শুধু নামগুলো বের করা।
const users = [{id:1, name: "Arif"}, {id:2, name:"Siam"}];
const name = users.map(user => user.name);
// console.log(name);

// 2.প্রাইস আপডেট: সব পণ্যের দাম ১০% বাড়ানো।
const prices = [100,200,300];
const newPrices = prices.map(p => p+(p*0.1));
console.log(newPrices);