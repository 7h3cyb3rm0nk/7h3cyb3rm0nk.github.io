import {updateAge} from './lib/age.js';
import {typewrite} from './lib/typewriter.js';

// update age dynamically
let ageElement = document.querySelector("#age");
updateAge(ageElement);

//typewrite effect on text
let desc = document.querySelector("#desc");
let speed = 50;
typewrite(desc, speed);
