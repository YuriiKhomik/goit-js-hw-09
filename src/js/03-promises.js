import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
  btn:  document.querySelector('.form > button'),
}

// refs.btn.addEventListener('click', onBtnClick);
refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e){};

function onFormSubmit(e){
  e.preventDefault();
  let inputDelay = refs.delay.value;
  const inputStep = refs.step.value;
  const inputAmount = refs.amount.value;
  let intervalCounter = 0;

  const intervalId = setInterval(() => {
    intervalCounter += 1;
    inputDelay += inputStep;
    
    if(intervalCounter >= inputAmount){
      clearInterval(intervalId);
    }

    createPromise({intervalCounter, inputDelay})
    
  }, inputDelay);
};

function createPromise({intervalCounter, inputDelay}) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Notify.success(`✅ Fulfilled promise ${intervalCounter} in ${inputDelay}ms`);
    console.log(`✅ Fulfilled promise ${intervalCounter} in ${inputDelay}ms`);
  } else {
    // Notify.failure('`❌ Rejected promise ${intervalCounter} in ${inputDelay}ms`');
    console.log(`❌ Rejected promise ${intervalCounter} in ${inputDelay}ms`)
  }
};


