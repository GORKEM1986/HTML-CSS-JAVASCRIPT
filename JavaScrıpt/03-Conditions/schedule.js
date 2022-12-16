// ! ODEV2
// ! Clarusway’deki haftalik ders ve etkinlik programinizi,
// ! console’dan girilen gun degerine gore cikti veren kodu
// ! switch-case yapisi ile yaziniz.

// ! Program
// ! Pazartesi, Sali ,Çarsamba, Persembe -> InClass
// ! Cuma -> Teamwork
// ! Cumartesi ->  InClass + Workshop
// ! Pazar -> Self-Study
// ! Aksi takdirde -> Yanlis gun girildi.

//? ===============================
//?   CLARUSWAY SCHEDULE
//? ===============================

let day = prompt("Enter the day that want to learn the program");

switch (day) {
  case "monday":
  case "tueasday":
  case "wednesday":
  case "thursday":
    console.log("ın-class");
    break;
  case "friday":
    console.log("Team Work");
    break;
  case "saturday":
    console.log("ın-class " + " Workshop");
    break;
  case "sunday":
    console.log("self-study");
    break;
  default:
    alert("wrong entranced");
    break;
}
