import { updateAge } from  './age.js';

function typeWriter(element, speed) {
  let elementText = element.textContent;
  element.innerHTML = "";
  for(let i=0; i < elementText.length; i++){
    setTimeout(()=>{
      element.innerHTML += elementText.charAt(i);
    }, speed * i);
  }
}

//typewriter effect  
let desc = document.querySelector("#desc");
typeWriter(desc, 50);

// update age
