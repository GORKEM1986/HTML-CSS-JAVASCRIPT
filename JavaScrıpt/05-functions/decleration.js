//? ================================
//?          FUNCTIONS
//?=================================





console.log("** FUNC DECLERATION**");


//? Decleration

//?  ORN1

function printHello (){
    console.log("Hello");
}


printHello()  //! invoke, call
printHello()  //! invoke, call
printHello()



//? ORN2


function greet(firstName, lastName) {
    console.log(`Hi , ${firstName} ${lastName}`);
}
//? invoke examples


greet("Sabata", "2288")
greet("Sercan", "Yilmaz")
greet("Mariam", "Harold")


// const name = prompt("Your Name: ")
// const surname = prompt("Your Surname: ")
// greet (name, surname)

// const x = prompt("Your Name: ")
// const y = prompt("Your Surname: ")
// greet (x, y) //?js de fonksiyonlar parametrelere değiskenleri değil onların degerlerini aktarır.



//? ORN3

// function calculate(name, yob) {
//     const age = 2022-yob
//     console.log(`${name}'s age is ${age}`);
// }




function calculate(name, yob) {
    const age = 2022-yob
    return `${name}'s age is ${age}`;
}

const elif = calculate("elif", 2000)

console.log(elif);
console.log(calculate("Rose", 1990));


//? ORN 4

//? Console'dan girilen bir sayının tek veya cift olduğunu
//? hesaplayan ve sonucu ana programa dondoren kodu fonksiyonlar 
//? ile yazınız.

function oddOrEven(num) {                   //?   ALTERNATİFLER   //
    
    // return num % 2 ? "ODD" : "EVEN" //? farklı bir yontem *//
    // return num % 2 === 0 ? "EVEN" : "ODD" //? en kısa yontem *//

    // if (num%2 === 0) {    //? if kullanılan yontem *//
    //     return "EVEN"
    // } else {
    //     return "ODD"
    // }

    let result 

    if (num % 2 === 0) {     //? let kullanılan yontem *//
        result "EVEN"
    } else {
        result "ODD"
    }
    return result;
}

const number = +prompt("Please enter a number to check odd or even:")
const oddEven = oddOrEven(number)
console.log(`${number} is ${oddEven}`);

