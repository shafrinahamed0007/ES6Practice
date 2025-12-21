const defaultSettings = {theme:"light", fontSize: "14px", showNotification: true};
const userSettings = {theme:"dark", fontSize: "18px"};

const finalSettings = {...defaultSettings, ...userSettings};
// userSettings এর মানগুলো defaultSettings কে ওভাররাইট করবে
console.log(finalSettings);