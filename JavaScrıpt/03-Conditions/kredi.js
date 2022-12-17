const income = Number(prompt("Enter your income"));
const expense = Number(prompt("Enter your expense"));
const minimumWage = 5500;


const kredi =
  income - expense > minimumWage
    ? alert ("your credit is available") 
    : alert ("your credit is not available");
    console.log(kredi);
