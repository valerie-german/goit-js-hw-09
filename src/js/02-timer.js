import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");

startBtn.setAttribute("disabled", "disabled");

const todaysDate = new Date().getTime();
// console.log(todaysDate);
// console.log(todaysDate.getTime());

let futureDate;
let timerId = null;


function dateChecking(today, future) { 
    if (today >= future) {
        window.alert("The past is irrevocable. Let's look to the future! 🧐");    
       
    }
    else { 
      startBtn.removeAttribute("disabled");
     
    }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}






const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        futureDate = selectedDates[0].getTime();
         
        dateChecking(todaysDate, futureDate);

      startBtn.addEventListener('click', timerOn);


        function timerOn() {
          let ms = futureDate - todaysDate;
            timerId = setInterval(() => {
                ms -= 1000; 
                if (ms <= 0) { 
                    clearInterval(timerId);
                }               
                
                const { days, hours, minutes, seconds } = convertMs(ms);
        

                document.querySelector("span[data-days]").textContent = days;
                document.querySelector("span[data-hours]").textContent = hours;
                document.querySelector("span[data-minutes]").textContent = minutes;
                document.querySelector("span[data-seconds]").textContent = seconds;

            }, 1000); 
        }       


    },    
};



input.addEventListener('focus',  flatpickr("#datetime-picker", options))


    

                