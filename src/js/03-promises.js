import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');
let timerId = null;
let delayCounter;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const [delay, step, amount] = event.target.elements;  
  const paramObj = { delay: delay.value, step: step.value, amount: amount.value };
  
  // let paramObj = {...event.target.elements};
  
   delayCounter = paramObj.delay;

  for (let i = 1; i <= paramObj.amount; i += 1) {
    
    // console.log(delayCounter);
    
    
    createPromise(i, delayCounter)

    delayCounter = Number(delayCounter) + Number(paramObj.step);

    // console.log(delayCounter);
   }
  

  // timerId = setInterval(() => {
  //   counter += 1;
  //   console.log(counter);
    
  //   createPromise(counter, delay)
    
  //  }, step.value)

 
});





function createPromise(position, delay) {
  setTimeout(() => { 
    const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
       console.log(`${position} Resolve ${delay}`);
      }
      else {
       console.log(`${position} Reject ${delay}`);
      } 
  }, delay)
    
  
}




