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
  const inputDelay = refs.delay.value;
  const inputStep = refs.step.value;
  const inputAmount = refs.amount.value;
  let intervalCounter = 0;

  const intervalId = setInterval(() => {
    intervalCounter += 1;
    // let delay =  inputDelay + inputStep;
    if(intervalCounter >= inputAmount){
      clearInterval(intervalId);
    }

    
    // createPromise(intervalId, inputDelay);
  

  }, inputDelay);
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
