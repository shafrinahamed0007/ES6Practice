// Ekti complex conditioner udhahoron jekhane if-else if bebohar kore Ticket Pricing system banano hoyechhe.

let passengerAge = 65;
let hasMemberCard = true;
let baseTicketPrice = 1000;
let finalPrice;

if(passengerAge < 5){
    finalPrice = 0;
    console.log("Ticket is free for infants");
}else if(passengerAge >=5 && passengerAge <=12){
    finalPrice = baseTicketPrice * 0.5; // 50% discount
    console.log("Child discount applied 50%");
}else if(passengerAge >=60){
    // Senior citizen login
    if(hasMemberCard){
        finalPrice = baseTicketPrice * 0.6; // 40% discount if member
    } else{
        finalPrice = baseTicketPrice * 0.8; // 20% discount if not member
    }
    console.log("Senior citizen discount applied");
    
   
} else{
    finalPrice = baseTicketPrice;
    console.log("Regular ticket price applied");
}

console.log(`The final ticket price is: ${finalPrice} TK`);