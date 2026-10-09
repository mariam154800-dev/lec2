let price = +prompt('Enter item price');
let quantity = +prompt('Enter quantity');

let total = price * quantity;

if(total >= 1000){
    total = total + 0;
} else {
    total = total + 60;
}

let hasCoupon = confirm('Do you have a coupon?');
if(hasCoupon == true){
    let coupon = +prompt('Enter coupon % discount');
    let discount = (coupon/100) * total;
    total = total - discount;
}

let vat = (14/100) * total;
let finalPrice = total + vat;

console.log(finalPrice);
alert("Final Price = " + finalPrice);