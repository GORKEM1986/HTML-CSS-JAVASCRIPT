//? TAHMİN OYUNU//

const randomNumber = Math.trunc(Math.random() * 100);
let trying = 0;
let enterNumber;
let count = 0;

do {
  count++;
  trying++;
  enterNumber = +prompt(
    `(0-100) olan sayıyı tahmin etmeniz isteniyor. ${count}. deneme:`
  );
  if (enterNumber < 0 || enterNumber > 100) {
    alert(`Lütfen 0-100 arasında bir sayı giriniz.`);
  } else {
    if (enterNumber == randomNumber) {
      alert(`Tebrikler sayıyı ${count} denemenizde buldunuz.: ${randomNumber}`);
      console.log(`Tebrikler doğru sayıyı buldunuz: ${randomNumber}`);
      break;
    } else if (enterNumber > randomNumber) {
      alert("Daha küçük rakam giriniz");
    } else if (enterNumber < randomNumber) {
      alert("Daha büyük bir rakam giriniz");
    }
  }
  if (trying > 4) {
    let statusControl = prompt(
      "Sayıyı bilemediniz devam etmek istiyor musunuz?(e/h): "
    );
    if (statusControl == "e") {
      trying = 0;
    } else {
      console.log(`Sayıyı bilemediniz. Sayı : ${randomNumber}`);
      break;
    }
  }
} while (enterNumber !== randomNumber); //Sayı tahmin edilemeyinceye kadar dön
