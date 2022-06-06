const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        const colorCode = getRandomHexColor();
        body.style.backgroundColor = colorCode;     
    console.log(`Body color is:  ${colorCode}`);
    }, 1000);
    
    startBtn.setAttribute("disabled", "disabled");
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
    console.log(`Yep, this color is great!`);
    startBtn.removeAttribute("disabled");
});
