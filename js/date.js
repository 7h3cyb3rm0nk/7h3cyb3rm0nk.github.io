
function updateAge(element){

let bday = new Date("21 june 2004, 00:00:00");

let today = new Date(Date.now());
let currentYear = today.getFullYear();
let bdayYear = bday.getFullYear();
let age = currentYear - bdayYear;
let monthDiff = today.getMonth() - bday.getMonth();

if ( monthDiff < 0 ||( monthDiff === 0 && today.getDate() < bday.getDate())){
  age--;
}


let i=0;
element.textContent = i + "year";
let intervalId = setInterval( ()=> {
  i++;
  element.textContent = (i< 10)? i + " year": i + " years" ;
  if(i >= age) {
   clearInterval(intervalId);
  }
  
}, 100);

}


let ageElement = document.querySelector("#age");
updateAge(ageElement);

