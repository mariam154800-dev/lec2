let months = +prompt('Enter number of months');

let pricePerMonth = 350;
let total = months * pricePerMonth;

if(months >= 12){
    let discount = (15/100) * total;
    total = total - discount;
} else if(months >= 6){
    let discount = (10/100) * total;
    total = total - discount;
}

let personalTraining = confirm('Do you want personal training?');
if(personalTraining == true){
    total = total + 200;
}

let vat = (14/100) * total;
let finalPrice = total + vat;

console.log(finalPrice);
alert("Final Price = " + finalPrice);
