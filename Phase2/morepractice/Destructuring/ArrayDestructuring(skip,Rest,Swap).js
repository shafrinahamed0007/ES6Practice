const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// ১. প্রথম রঙটি 'primary' ভেরিয়েবলে নাও।
// ২. দ্বিতীয় রঙটি বাদ দাও (Skip)।
// ৩. বাকি সবগুলোকে 'otherColors' নামে একটি নতুন অ্যারেতে রাখো।

const [primary, , ...otherColors] = colors;
console.log(primary);
console.log(otherColors);

// বোনাস: ভ্যালু সোয়াপিং (অদল-বদল)

let light = "ON";
let dark = "OFF";

[light, dark] = [dark, light];
console.log(light);
console.log(dark);