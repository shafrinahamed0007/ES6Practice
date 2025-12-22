// একটি ডাটা আপডেট করে বাকিগুলো ঠিক রাখা।


const state = {count:1, user:"admin", theme: "blue"};


// শুধু count বাড়াবো, বাকি সব 'others' এ থাকবে
const {count, ...others} = state;
const newState = {...others, count: count + 1};
console.log(newState);