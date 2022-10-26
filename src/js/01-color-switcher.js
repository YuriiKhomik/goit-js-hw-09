const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};
const chngBgColorInterval = 1000;
let intervalId = 0;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
refs.stopBtn.toggleAttribute('disabled');

function onStartBtnClick(){

    refs.startBtn.toggleAttribute('disabled');
    refs.stopBtn.toggleAttribute('disabled');

    intervalId = setInterval(() => {
        const color = getRandomHexColor()
        refs.body.style.backgroundColor = color;
    }, chngBgColorInterval);
};

function onStopBtnClick(){
    clearInterval(intervalId);

    refs.startBtn.toggleAttribute('disabled');
    refs.stopBtn.toggleAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
