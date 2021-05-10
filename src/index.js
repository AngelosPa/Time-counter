// for the clock
const ola = document.querySelector(".clockcontainer");
let mydate = new Date();
setInterval(getMyTime, 100);
function getMyTime() {
  mydate = new Date();
  let time = mydate.toLocaleTimeString("de-DE", {});
  document.querySelector(".clock").innerHTML = time;
}
//getMyTime();
//mycreation.innerHTML = ` ${getMyTime()}`;

//for the csss day/night effect
let rightdaytime = mydate.toLocaleTimeString("de-DE", {}).substring(0, 2);
let daytime = "";
console.log();
if (parseInt(rightdaytime) < 6) {
  daytime = "nacht";
} else if (parseInt(rightdaytime) < 12) {
  daytime = "morgen";
} else if (parseInt(rightdaytime) < 19) {
  daytime = "mittag";
} else {
  daytime = "abend";
}
ola.classList.add(daytime);

// for the timer
const deciseconds = document.querySelector("#tens");
const seconds = document.querySelector("#seconds");
const buttonstart = document.querySelector("#button-start");
const buttonstop = document.querySelector("#button-stop");
const buttonreset = document.querySelector("#button-reset");
//let mydate = new Date();
let second = 0;
let decisecond = 0;
let intervalsec = 0;
let intervaldeci = 0;
const startCounting = () => {
  buttonstart.disabled = true;
  intervalsec = setInterval(() => {
    second++;
    seconds.innerHTML = second;
  }, 1000);
  intervaldeci = setInterval(() => {
    decisecond++;
    deciseconds.innerHTML = decisecond;
    if (decisecond == 10) {
      decisecond = 0;
    }
  }, 100);
};
const stopCounting = () => {
  buttonstart.disabled = false;
  clearInterval(intervalsec);
  clearInterval(intervaldeci);
};
const resetCounting = () => {
  buttonstart.disabled = false;
  clearInterval(intervalsec);
  clearInterval(intervaldeci);
  seconds.innerHTML = "00";
  deciseconds.innerHTML = "00";
};
buttonstart.addEventListener("click", startCounting);
buttonstop.addEventListener("click", stopCounting);
buttonreset.addEventListener("click", resetCounting);

// for the rabbit
const rabbit = document.querySelector(".rabbit");
let jumphalt = document.querySelector(".rabbit");
const running = () => {
  jumphalt.classList.add("rabbit_run");
  jumphalt.classList.remove("rabbit_stop");
};
const notrunning = () => {
  jumphalt.classList.add("rabbit_stop");
  jumphalt.classList.remove("rabbit_run");
};

buttonstart.addEventListener("click", running);
buttonreset.addEventListener("click", notrunning);
buttonstop.addEventListener("click", notrunning);
