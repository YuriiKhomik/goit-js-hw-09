import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};

let selectedTime = 0;


refs.startBtn.toggleAttribute('disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedUnixTime = selectedDates[0].getTime();
    let currentUnixTime = Date.now();

    if(selectedUnixTime <= currentUnixTime){
        Notify.failure('Please choose a date in the future');
    }else{
        refs.startBtn.toggleAttribute('disabled');
        refs.startBtn.addEventListener('click', onStartBtnClick)
        selectedTime = selectedUnixTime
    };
  },
};

flatpickr(refs.input, options);

// function onStartBtnClick(){
//     refs.startBtn.toggleAttribute('disabled');
//     let timerId = 0;
    
  
//     setInterval(()=>{
//         const deltaTime = selectedTime - Date.now();
//         if(deltaTime <= 0){
//             clearInterval(timerId);
//             Notify.success('Timer done!!');
//             return;
//         }else{
//             const timeLeft = convertMs(deltaTime);
//             updateClockFace(timeLeft);
//             console.log(timeLeft);
//         }
//     }, 1000)
// };

function onStartBtnClick(){
    timer();
    refs.startBtn.toggleAttribute('disabled');
    refs.input.toggleAttribute('disabled');

    const timerId = setInterval(()=>{
        timer(timerId);
    }, 1000)
};

function timer(timerId){
    const deltaTime = selectedTime - Date.now();
    if(deltaTime <= 0){
        clearInterval(timerId);
        Notify.success('Timer done!!');
    }else{
        const timeLeft = convertMs(deltaTime);
        updateClockFace(timeLeft);
        // console.log(timeLeft);
    };
};










function updateClockFace({days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
};



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};











