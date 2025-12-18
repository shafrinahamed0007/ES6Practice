const user = {
    name:"Abir",
    city: "Dhaka",
    profession:"Developer"
};


// Arrow function using template literals
const createdCard = (person) =>{
    return `

      --- User Info ---
      Name: ${person.name}
      Works as: ${person.profession}
      Lives in: ${person.city}
      -----------------
    `;
}

console.log(createdCard(user));