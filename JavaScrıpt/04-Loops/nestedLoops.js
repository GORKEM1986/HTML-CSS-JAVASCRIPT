// * ============================================
// *            NESTED LOOPS
// * ============================================

console.log("** NESTED FOR **");

let result;
for (let row = 1; row <= 10; row++) {
  console.log(row);
}
for (let col = 1; col <= 10; col++) {
  console.log(col);
}

for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    result = row * col;
    console.log(result);
  }
  console.log("-");
}
