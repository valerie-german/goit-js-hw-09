import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const todaysDate = new Date().getTime();
// let futureDate = 0;

startBtn.setAttribute("disabled", "disabled");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  timerId: 0,
  futureDate: 0,

    onClose(selectedDates) {
        options.futureDate = selectedDates[0].getTime();
        dateChecking(todaysDate, options.futureDate);

        startBtn.addEventListener('click', () => {    
            if (options.timerId !== null) {
                clearInterval(options.timerId);
            }
            options.timerId = timerOn(todaysDate, options.futureDate);
         });
    }    
};


input.addEventListener('focus', () => {
    flatpickr("#datetime-picker", options);    
})


function dateChecking(today, future) { 
    if (today >= future) {
        Notify.failure("The past is irrevocable. Let's look to the future! 🧐");
        startBtn.setAttribute("disabled", true);
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

function addLeadingZero(value) { 
    return String(value).padStart(2, '0');
}

function timerOn(today, future) {
    let ms = future - today;
    let localTimerId = setInterval(() => {
        ms -= 1000; 
        if (ms <= 0) {
            clearInterval(localTimerId);
        }
        else { 
            const { days, hours, minutes, seconds } = convertMs(ms);        

        document.querySelector("span[data-days]").textContent = addLeadingZero(days);
        document.querySelector("span[data-hours]").textContent = addLeadingZero(hours);
        document.querySelector("span[data-minutes]").textContent = addLeadingZero(minutes);
        document.querySelector("span[data-seconds]").textContent = addLeadingZero(seconds);  
        }
    }, 1000);
    return localTimerId;
} 



