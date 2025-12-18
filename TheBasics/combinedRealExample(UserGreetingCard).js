const user = {
    name:"Abir",
    city: "Dhaka",
    professional: "Developer"
};

// Arrow function using template literals

const createdCard = (person) =>{
    return `
      --- User Info ---
      Name: ${person.name}
      Works as: ${person.professional}
      Lives in: ${person.city}
    
    `;

    
}

console.log(createdCard(user));