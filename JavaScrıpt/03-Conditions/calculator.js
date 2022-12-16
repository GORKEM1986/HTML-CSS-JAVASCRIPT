//? ===============================
//?        HESAP MAKİNESİ
//? ===============================

const n1 = Number(prompt("Please enter the first number"));
const n2 = Number(prompt("Pleaseenter the second number"));
const operation = prompt("Enter the operator:(+,-,*,/)");

let result;

if (operation === "+") {
  console.log(`result: ${n1 + n2}`);
} else if (operation === "-") {
  console.log(`result: ${n1 - n2}`);
} else if (operation === "*") {
  console.log(`result: ${n1 * n2}`);
} else if (operation === "/") {
  console.log(`result: ${n1 / n2}`);
} else console.log("The result is wrong");
