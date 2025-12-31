// Password validation function

function validationRegistration (uName, password, confirmPassword){
    if(uName <= 3){
        return "Registration Failed: User Name too short!";
    
    }

    if(password !==confirmPassword){
        return "Registration Failed: Password do not match";
    }

    if(password.length < 8){
        return "Registration Failed: Password must be at least 8 characters";
    }

    return `Success! Welcome ${uName}, your account is created`;
}

let result1 = validationRegistration("abir1234", "secret123", "secret123");
let result2 = validationRegistration("dev", "123", "123");

console.log(result1);
console.log(result2);
