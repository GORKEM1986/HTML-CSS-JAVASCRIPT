
const  num1 = Number(prompt("firstNumber"))
const  num2 = Number(prompt("secondNumber"))
const  num3 = Number(prompt("thirdNumber"))


console.log(num1);
console.log(num2);
console.log(num3);


const add = (num1 + num2 + num3);

const mul = (num1 * num2 * num3);

console.log(mul);


let enBuyuk = num1;

if (num2 > enBuyuk ) {
    enBuyuk = num2
}
if (num3 > enBuyuk ) {
    enBuyuk = num3
}

console.log(enBuyuk);




let enKucuk = num1;

if (num2 < enKucuk ) {
    enKucuk = num2
}
if (num3 < enKucuk ) {
    enKucuk = num3
}

console.log(enKucuk);


alert (`Merhaba,
Toplamları: ${add}, 
Carpımları: ${mul}, 
Enbuyuk sayı: ${enBuyuk}, 
Enkucuksayı: ${enKucuk}`)

