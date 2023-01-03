// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//*-----------------------------------------------

//! 1.Yontem (Array Literal) Tercih edilen yontem
const names = ["emir", "oğuzhan","levent", "tarik" ]

console.log(names);
console.log(names.length);  //? 4 (names dizisinin lenght property sine erisiyoruz)


const x = 5.234986 //? primitive
console.log(x.toFixed(2));
console.log(typeof names);


const emptArr =[]
console.log(emptArr);

// //! 2.Yontem (Object Constructor) 

const codingLangs = new Array("C", "C++", "JS", "Go")
console.log(codingLangs);

const numbers = new Array(3,2,1)
console.log(numbers);

const numbers1 = new Array(10)
console.log(numbers1);


// ! 3.Yöntem (Array.of())
const number2 = Array.of(1, 2, 3)
console.log(number2) //?(3) [1, 2, 3]

const numbers3 = Array.of(5)
console.log(numbers3) //? [5]



// //* Diziden Veri Okuma-Yazma (indisleme)
// //* ----------------------------------------------
// //!  Diziden veri okuma

//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]


const names1 = ["emir", "oğuzhan","levent", "tarik", "Sabata", "Mehtap", "Rose"]
console.log(names1[1]); //? oğuzhan
const tarik = names1[3]
console.log(tarik); //? tarik

console.log(names1[5]);
const lastE1 = names1[names1.length - 1]
console.log(lastE1);


//? Alternatif olarak at()  metodu
console.log(names1.at(-3));


// //!  Diziye veri yazma

names1[2] = "Levent"

// names1[2]=(names1[2].toUpperCase());
console.log(names1)


// const names = ["ismet", "canan"] //! Identifier 'names' has already been declared

// names = []  //! Assignment to constant variable

// //! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
// //! degisitirilebilir. Cunku diziler non-primitive verilerdir.
// //! const ile tanimlanan bir dizinin referansi (baslangic adresini)
// //! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
// //! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
// //! degistirmek mumukundur.
// //! const, sadece dizinin stackte tututlan adresinin degistirilmesini engeller.

// //? Diziler farklı veri tiplerini bir arada saklayabilir.

const ageArr = [22,44,55]
const people = ["John", "Varmont",new Date().getFullYear() - 1990,true,ageArr,]
console.log(people);
console.log(people[4]);
console.log(++people[4][1]);
console.log(people);
console.log(ageArr);
ageArr[0]--

console.log(people);


// //?================================================
// //?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
// //?================================================

// //** pop() son elemani siler ve sildigi elemani dondurur.
// const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]
// console.log(cars.pop())
// console.log(cars)

// //* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
// console.log("LEN:", cars.push("Lexus"))
// console.log(cars)

// // cars.push = "hyundai" //? diziye yeni bir properyt(degisken) eklendi
// // console.log(cars)
// // console.log(cars.push)

// //* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
// console.log(cars.unshift("Togg"))
// console.log(cars)

// //* dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
// console.log(cars.shift())
// console.log(cars)


// //?================================================
// //?             DIZI ERISIM METOTLARI
// //?================================================
