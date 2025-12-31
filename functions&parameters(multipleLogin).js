// Password validation function
function validateRegistration(uName, password, confirmPassword) {
    if (uName.length < 5) {
        return "Registration Failed: Username too short!";
    }
    
    if (password !== confirmPassword) {
        return "Registration Failed: Passwords do not match!";
    }
    
    if (password.length < 8) {
        return "Registration Failed: Password must be at least 8 characters.";
    }
    
    return `Success! Welcome ${uName}, your account is created.`;
}

let result1 = validateRegistration("abir123", "secret123", "secret123");
let result2 = validateRegistration("dev", "123", "123");

console.log(result1);
console.log(result2);