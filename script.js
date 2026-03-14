const birthday = new Date("March 22, 2026 00:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = birthday - now;

const days = Math.floor(distance / (1000*60*60*24));

document.getElementById("countdown").innerHTML =
days + " Days Left Until Your Birthday 🎂";

if(distance < 0){

clearInterval(timer);

document.getElementById("countdown").style.display="none";

document.querySelector(".subtitle").style.display="none";

document.getElementById("birthdayMessage").classList.remove("hidden");

startTyping();

confetti();

}

},1000);



/* typing message */

function startTyping(){

const text = `Happy Birthday to the most annoying person I know...
but also the one I can't live without.

Thanks for all the stupid laughs and crazy memories.
Stay the same idiot forever.

Love you unlimitedly. 🎉`;

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,50);

}

}

type();

}



/* confetti */

function confetti(){

for(let i=0;i<200;i++){

let div=document.createElement("div");

div.style.position="fixed";
div.style.width="10px";
div.style.height="10px";
div.style.background="hsl("+Math.random()*360+"deg,100%,50%)";
div.style.left=Math.random()*100+"vw";
div.style.top="-10px";

document.body.appendChild(div);

div.animate([

{transform:"translateY(0)"},
{transform:"translateY(100vh)"}

],{

duration:5000,
iterations:1

});

}

}