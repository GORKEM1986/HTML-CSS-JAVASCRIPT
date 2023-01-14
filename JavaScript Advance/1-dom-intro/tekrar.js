//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.color = "blue";
myHeader.style.backgroundColor = "yellow";

const button = document.getElementById("btn");
const textInput = document.getElementById("input");
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.padding = "0.7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.fontSize = "20px";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const list = document.getElementsByTagName("li");
console.log(list);

list[0].style.color = "magenta";
list[list.length - 1].style.color = "purple";

const header = document.getElementsByTagName("header");
console.log(header);

console.log(list.item(3));

list[3].textContent = "REACT / VUE";
list[3].innerText = "React / VUE / Swelte";
list[3].innerHTML = "React / VUE / Swelte / Angular";

console.log(list[2].textContent);

console.log(list[2].innerText);

console.log(list[2].innerHTML);

list[4].innerHTML += `<li> <a href="https://www.clarusway.com">CW</a> </li>`;

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const itemListSec = document.getElementsByClassName("item-list");
console.log(itemListSec);
console.log(itemListSec[0]);

// [...itemListSec].forEach( x => console.log(x););
