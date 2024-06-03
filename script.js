let desc = document.querySelector("#desc");
let descText = desc.textContent;
desc.innerHTML ="";
let i = 0;

function typeWriter() {
  if (i < descText.length) {
    desc.innerHTML += descText.charAt(i);
    i++;
    setTimeout(typeWriter, 50); 
  }
}

typeWriter();
