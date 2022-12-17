const salary = Number(prompt("Enter your salary"));
const minimumWage = 5500;

if (salary <= minimumWage) {
  console.log(`Your new salary will be ${salary * 1.5} TL.`);
} else if (salary > minimumWage) {
  console.log(`Your new salary will be ${Math.round(salary * 1.1)} TL.`);
}
