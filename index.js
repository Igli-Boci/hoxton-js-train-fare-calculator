let age = Number(prompt("May I know how old you are?"));

let distance = Number(prompt("Also may I know how far is your destination? (Km)"));

let pricePerKm = 0.21;

let price = distance * pricePerKm;

let under18 = 0.2;
let over65 = 0.4;


let under18Price = price - (price * under18);
let over65Price = price - (price * over65);

let totalPrice;

if (age < 18) {
    totalPrice = under18Price;
}

else if (age >= 18 && age < 65) {
    totalPrice = price;
}

else if (age >= 65) {
    totalPrice = over65Price;
}

console.log("Thank you, your payment is: " + totalPrice + " Eu.");