

export function typeWriter(element, speed) {
     let elementText = element.textContent;
     element.innerHTML = "";
     for(let i=0; i < elementText.length; i++){
       setTimeout(()=>{
         element.innerHTML += elementText.charAt(i);
       }, speed * i);
    }
 }

