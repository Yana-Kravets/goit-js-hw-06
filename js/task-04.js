const decrButton = document.querySelector('[data-action="decrement"]');
const counterValue = document.getElementById('value');
const incrButton = document.querySelector('[data-action="increment"]');

let count = 0;

decrButton.addEventListener('click', (e, counter) => {
    count -= 1;
    updateDisplay();
});

incrButton.addEventListener('click', () => {
    count += 1;
    updateDisplay();
});

function updateDisplay(){
    counterValue.innerHTML = count;
};