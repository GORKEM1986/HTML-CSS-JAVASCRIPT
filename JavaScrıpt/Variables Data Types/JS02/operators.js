// * ==========================================
// *        ARİTMETİK OPERATORLER
// * ==========================================

console.log("**** Operators ****");

const cola = 20;
const gumm = 5;
const biscuits = 15;

const totalPrice = cola + gumm + biscuits;

// totalPrice++

console.log("TOTAL PRICE:", totalPrice);

// + Operatoru Strıng Concatination islemi de yapar.
console.log("TOTAL PRICE:" + totalPrice); //? String

const comments = totalPrice + " TL";
console.log(comments);

const commets = 50 + 40 + " TL";
console.log(commets);

const firstName = "Ahmet";
const lastName = "Can";
console.log(firstName + " " + lastName);

const s1 = 5,
  s2 = "4";
s3 = "three";

console.log(s1 + s2); //? 54
console.log(s1 - s2); //? 1
console.log(s1 - s3); //? NaN (Not a Number)
// string ifadeyi number a cevirmey

const difference = s1 - s3;
console.log(difference, typeof NaN); //? NaN ın data type ı number'dır
