const body = document.querySelector('body');
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

let countNum = 0;

buttons.addEventListener('click', (event) => {
    const target = event.target;
    
    if(target.matches('.decreaseBtn')){
        countNum = --countNum;
    } else if(target.matches('.resetBtn')){
        countNum = 0;
    } else if(target.matches('.increaseBtn')){
        countNum = ++countNum;
    }
    count.innerText = countNum;
    count.style.color = `${countNum < 0 ? count.style.color = 'red' : count.style.color = 'blue'}`
})  

