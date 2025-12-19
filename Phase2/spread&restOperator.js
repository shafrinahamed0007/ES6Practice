const oldData = [100,200];
const updatedData = [...oldData, 300,400]; // Merge and add new elements
console.log(`Old Data: ${oldData} and Updated Data: ${updatedData}`);


const originalUser = {name: "Rahat", role: "User"};
const updateUser = {...originalUser, role: "Admin"}; // Copy and Update property
console.log(updateUser);