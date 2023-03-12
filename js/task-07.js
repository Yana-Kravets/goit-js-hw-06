const inputEl = document.getElementById('font-size-control');
const text = document.getElementById('text');

inputEl.addEventListener('input', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});
