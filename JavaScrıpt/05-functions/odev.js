//* SORU 1 *//

const puan = Number(prompt("Lütfen Notunuzu Giriniz : "));
if (puan <= 25) {
  console.log("FF");
} else if (puan <= 42) {
  console.log("DD");
} else if (puan <= 65) {
  console.log("CC");
} else if (puan <= 75) {
  console.log("BB");
} else if (puan <= 90) {
  console.log("BA");
} else if (puan <= 100) {
  console.log("AA");
} else {
  console.log("Yanlış Değer Girdiniz");
}

//* SORU 2 *//

const calcMonth = () => {
  ay = prompt("Lütfen Ay İsmini Giriniz :");
  switch (ay) {
    case "Ocak":
      return 1;
      break;
    case "Şubat":
      return 2;
      break;
    case "Mart":
      return 3;
      break;
    case "Nisan":
        return 4;
        break;
    case "Mayıs":
        return 5;
        break;
    case "Haziran":
        return 6;
        break;
    case "Temmuz":
        return 7;
        break;
    case "Ağustos":
        return 8;
        break;
    case "Eylül":
        return 9;
        break;
    case "Ekim":
        return 10;
        break;
    case "Kasım":
        return 11;
        break;
    case "Aralık":
        return 12;
        break;
  }
};

//* SORU 3 *//

const num1 = Number(prompt("firstNumber"));
const num2 = Number(prompt("secondNumber"));
const num3 = Number(prompt("thirdNumber"));

// console.log(num1);
// console.log(num2);
// console.log(num3);

const add = num1 + num2 + num3;

const mul = num1 * num2 * num3;

console.log(mul);
console.log(add);

let enBuyuk = num1;

if (num2 > enBuyuk) {
  enBuyuk = num2;
}
if (num3 > enBuyuk) {
  enBuyuk = num3;
}

console.log(enBuyuk);

let enKucuk = num1;

if (num2 < enKucuk) {
  enKucuk = num2;
}
if (num3 < enKucuk) {
  enKucuk = num3;
}

console.log(enKucuk);

alert(`Merhaba,
Toplamları: ${add}, 
Carpımları: ${mul}, 
Enbuyuk sayı: ${enBuyuk}, 
Enkucuksayı: ${enKucuk}`);



//* SORU 4 *//

// let letters = "qazxswedcvfrtgbnhyujmökıolçşipğü"

let number1 = prompt("Lütfen istediğiniz sayıyı giriniz : ")
if(isNaN(number1)) {
    console.log("Girdiğiniz Karakter Sayı Değil")
}else {
    if(number1 % 2 == 0) {
        console.log("Girilen Sayı Tektir")
    } else {
        console.log("Girilen Sayı Çifttir")
    }
}

//* SORU 5 *//

const convertToFahreneit = (degree) => {
    return (degree * 1.8) + 32
}
console.log(convertToFahreneit(32))
let degree = prompt("Lütfen Dereceyi Giriniz");
console.log((degree * 1.8) + 32)
console.log(convertToFahreneit(56))
console.log(convertToFahreneit(-10))
let convertToFahreneit = function() {
}
const convertToFahreneit = (p1, p2, p3) => 