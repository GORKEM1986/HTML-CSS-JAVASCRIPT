// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

// //? Ornek : 1 den n kadar sayıları toplayan kodu yazınız.

// const n =Number(prompt("Enter a number"));

// let sum = 0

// for (let i = 1; i <= n; i++) {
// sum += i
// }

// console.log("SUM:", sum)




//? Ornek: 0-100 arasında 10 adet rastgele tamsayığreten kodu 
//? for dongusu ile yazınız..

const num = Number(prompt("Enter a number"))

for ( let j = 1; j <= num; j++) {

    const randomNum = Math.round(Math.random() * 100) 

    console.log(`${j}. random number: ${randomNum}`)
}


