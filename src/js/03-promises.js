import { Notify } from 'notiflix/build/notiflix-notify-aio';

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