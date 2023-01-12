// * =======================================================
// *             FOR LOOP
// * =======================================================

// console.log(" **** FOR ****")

ek : 1 den n// //? Orn kadar sayıları toplayan kodu yazınız.

// const n =Number(prompt("Enter a number"));

// let sum = 0

// for (let i = 1; i <= n; i++) {
// sum += i
// }

// console.log("SUM:", sum)




// //? Ornek: 0-100 arasında 10 adet rastgele tamsayığreten kodu 
// //? for dongusu ile yazınız..

// const num = Number(prompt("Enter a number"))

// for ( let j = 1; j <= num; j++) {

//     const randomNum = Math.round(Math.random() * 100) 

//     console.log(`${j}. random number: ${randomNum}`)
// }

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.


//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const primeNum = Number(prompt("Enter a number"))

//? Flag method
let isPrime = true

if (primeNum < 2) {
  console.log("Number should be bigger than 1 ")
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
      //? Tam bolunuyorsa asal degildir
      console.log(`${primeNum} is not a prime number-${i}`)
      isPrime = false
      break
    }
  }

  if (isPrime === true) {
    console.log(`${primeNum} is a prime number`)
  }
}



// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")

let count = 1
while (count <= 10) {
  console.log("Count:", count)
  count++
}

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.