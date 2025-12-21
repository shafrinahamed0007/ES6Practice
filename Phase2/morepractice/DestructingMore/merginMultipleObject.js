const defaultSetting = {theme:"Light", fontSize: "14px", showNotification: true};
const userSetting = {theme:"Dark", fontSize: "18px"};

const finalSetting = {...defaultSetting, ...userSetting};
// userSettings এর মানগুলো defaultSettings কে ওভাররাইট করবে

console.log(finalSetting);