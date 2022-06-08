import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
let delayCounter;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const [delay, step, amount] = event.target.elements;  
  const paramObj = { delay: delay.value, step: step.value, amount: amount.value };
  
  // let paramObj = {...event.target.elements};
  
   delayCounter = paramObj.delay;

  for (let i = 1; i <= paramObj.amount; i += 1) {    
    createPromise(i, delayCounter)
      .then(({ position, delay }) => {
       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayCounter = Number(delayCounter) + Number(paramObj.step);
   }
});


function createPromise(position, delay) {
  const promiseParamObj = { position, delay }; 

  return new Promise((resolve, reject) => {
  setTimeout(() => { 
    const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
       resolve(promiseParamObj);
      }
      else {
       reject(promiseParamObj);
      } 
    }, delay)
 }); 
}




