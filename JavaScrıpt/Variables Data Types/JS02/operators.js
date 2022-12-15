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

//* Bir islemin sonucunun NaN olup olmadıgını anlamak icin isNaN() fonksiyonu kullanılabilir.
console.log(isNaN(difference)); //? true

//? Ornek
//?---------------------
const yearOfBirth = 1920;
const name = "John";
console.log(name + " is " + (2022 - yearOfBirth) + " years old");
console.log(
  name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
);

//!======== Template Literals==================

//? 3 şekilde string tanımlanabilir.

const message1 = "Merhaba Javascript"; //?cift tırnak
const message2 = "Merhaba Javascript"; //? Tek tırnak
const message3 = `Merhaba Javascript`; //? Backtick    //? Template Literals

console.log(`${name} is ${2022 - yearOfBirth}
years old`);

// //* CARPMA VE US ALMA (Multiply, Pow)
// //*-------------------------------------

// // //? Ornek
// // //? Kullanıcıdan veri girişi istedik
// // //? promp ile kullanıcıdan alınan veri default olarak string'dir
// // //? Bu veriyi number'a Number () fonksiyonu ile cevirebiliriz.
// // // const r = +prompt("Please enter r:")

// // const r = Number(prompt("Please enter r:"))
// // const pi = 3.14
// // const square = pi * r * r

// // console.log(`Square of Circle: ${square.toFixed(3)}`)

// // console.log(`Square of Circle: ${Math.floor(square)}`)
// // console.log(`Square of Circle: ${Math.ceil(square)}`)
// // console.log(`Square of Circle: ${Math.trunc(square)}`)
// // console.log(`Square of Circle: ${Math.round(square)}`)

// // //?Bazi fonksiyonlar
// // // Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// // // Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// // // Math.trunc(); //* sayinin tam kismini alir.
// // // Math.round(); //* en yakin tam sayiya yuvarlar.
// // // Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

// // const randomNumber = Math.random(); //? 0-1 arasında rasgele bi sayı
// // console.log(randomNumber * 100);

// // // ? 0-100 arasında sayı üretmek istenirse
// // const rasgele = Math.round(Math.random() * 100)
// // console.log(rasgele);

// //* ARTTIRMA VE AZALTMA (Inc.Dec)
// //*------------------------------------

// // Let a = 5
// // a++
// // console.log(a++)
// // y = a + 5
// // console.log(y);

// let z = 4;
// z = z + 5;
// z += 10;

// let k = 20;
// k -= 10;
// console.log("k:", --k);
// console.log({ k });

// //? Ornek : 3 katını alma

// let b = 4
// b = b * 3
// b *= 3 //? b = b * 3
// console.log({ b });


// //* MOD
// //* -----------------------------------

// const number = prompt("Please enter a 3-digits number:")
// const ones = number % 10
// const tens = Math.floor(number / 10) % 10
// const hundreds = Math.trunc(number/100)

// console.log(`Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones} `);




// * =======================================
// *          KARŞILASTIRMA OPERATORLERI
// * =======================================


// const num1 = 3

// console.log(num1 == 3);  //* true
// console.log(num1 === 3);  //* true
// console.log(num1 === "3");  //* false


// const num2 = "3"

// console.log(num1 == num2);
// console.log(num1 != num2);


// const num3 = 5
// const num4 = "1"

// console.log(num1 > num3)
// console.log(num1 <= num3)

// console.log(num2 > num4)


// //*===================================
// //* MANTIKSAL OPERATORLER
// //*===================================

const v1 = true
const v2 = false

console.log(v1 && v2);
console.log(v1 || v2);

console.log(!v1);

//   //*Ornek

// const age = prompt("Please enter your age:")
// const healty = confirm("are you healty")

// console.log(age, healty)



// if( age>=18 && healty== true){
//   console.log("Ehliyet alabilir")
// }else{
//   console.log("Ehliyet alamaz")
// }


//? Javascripte surekli falsy olan 6 deger bulunmaktadir.
const nal = null
const tanimsiz = undefined
const bos = ""
const sayiDegil = NaN
const sifir = 0
const falsy = false

console.log(Boolean(0))
console.log(Boolean(5))
console.log(Boolean(-5))
console.log(Boolean(12.4))


console.log(v1 && null && true && true) //?false
console.log(v1 && 4 && true && 5); //? 5
console.log(0 && v1);//* 0
console.log(v1 || 0); //* true

const num5 = 0
if (num5 === true) {
  console.log("sayı sıfır değildir")
} else {
  console.log("sayı sıfırdır")
}


//* ==============================
//*   TIP DONUSUMLERI
//*  =============================



