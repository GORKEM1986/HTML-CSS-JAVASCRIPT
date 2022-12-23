//? ================================
//?          FUNCTIONS
//?=================================

console.log("** EXPRESSION**");

//? Cannot access "printHello" before initialization
// printHello () //! invoke, call

//? Expression yontemi ile fonksiyonun tanımlanması

//?  ORN1

const printHello = function () {
  console.log("Hello");
};

printHello(); //! invoke, call
printHello(); //! invoke, call
printHello();

//? ORN2

let oddOrEven = function (num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
};

console.log(oddOrEven(9));

//? ORN3  3 sayının en buyugunu bulan fonks.

const findBiggest = function (n1, n2, n3) {
  let biggest = n1;
  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }

  return biggest;
};

console.log(`The Biggest: ${findBiggest(2, 1, 4)}`);
console.log(`The Biggest: ${findBiggest(6, 3, 2)}`);
console.log(`The Biggest: ${findBiggest(55, 77, 122)}`);
console.log(`The Biggest: ${findBiggest(-1, -7, -9)}`);

console.log(`The Biggest: ${findBiggest(55, 77)}`);
console.log(`The Biggest: ${findBiggest(-9, -7)}`);

const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};

const compute = function (n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;
  }
  return result;
};

console.log(compute(4, 3, "/"));
console.log(compute(2, 4, "*"));
console.log(compute(3, 1, "+"));
