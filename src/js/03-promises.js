import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const refs = {
//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),
//   form: document.querySelector('.form'),
//   btn:  document.querySelector('.form > button'),
// }

// // refs.btn.addEventListener('click', onBtnClick);
// refs.form.addEventListener('input', onFormInput);
// refs.form.addEventListener('submit', onFormSubmit);

// function onFormInput(e){};

// function onFormSubmit(e){
//   e.preventDefault();
//   let inputDelay = refs.delay.value;
//   const inputStep = refs.step.value;
//   const inputAmount = refs.amount.value;
//   let intervalCounter = 0;

//   const intervalId = setInterval(() => {
//     intervalCounter += 1;
//     inputDelay += inputStep;
    
//     if(intervalCounter >= inputAmount){
//       clearInterval(intervalId);
//     }

//     createPromise({intervalCounter, inputDelay})

//   }, inputDelay);
// };

// function createPromise({intervalCounter, inputDelay}) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     Notify.success(`✅ Fulfilled promise ${intervalCounter} in ${inputDelay}ms`);
//     console.log(`✅ Fulfilled promise ${intervalCounter} in ${inputDelay}ms`);
//   } else {
//     Notify.failure('`❌ Rejected promise ${intervalCounter} in ${inputDelay}ms`');
//     console.log(`❌ Rejected promise ${intervalCounter} in ${inputDelay}ms`)
//   }
// };


const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
  e.preventDefault();

  const {delay, step, amount} = e.target;
  let inputDelay = +delay.value;
  const inputStep = +step.value;
  const inputAmount = +amount.value;
  
  for(let index = 0; index < inputAmount; index++){
    createPromise({index: index + 1, inputDelay})
    .then(({index, inputDelay})=> {
      Notify.success(`✅ Fulfilled promise ${index} in ${inputDelay}ms`)
    })
    .catch(() => {
      Notify.failure(`❌ Rejected promise ${index} in ${inputDelay}ms`);
    });
    inputDelay += inputStep;
  }
};

function createPromise({index, inputDelay}) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({index, inputDelay});
      } else {
        reject({index, inputDelay});
      }
    }, inputDelay);
  });
};