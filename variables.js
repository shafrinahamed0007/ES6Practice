// User account er fixed ebong changeable data
const accountID = "ACC-99821"; // Constant - Not changeable
let userName = "Arif Hossain";
let currentBalance = 15000.50;
let isActive = true;

// String Concatenation and Template Literals
let accountSummary = `

--- Account Details ---
ID: ${accountID}
User: ${userName}
Current Balance: ${currentBalance} TK
Stats: ${isActive ? "Active User" : "Inactive User"}

`;

console.log(accountSummary);

// Variable update kora
let deposit = 5000;
currentBalance = currentBalance + deposit;
console.log(`New Balance after deposit: ${currentBalance} TK`);