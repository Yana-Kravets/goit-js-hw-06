const menuEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${menuEl.length}`);
console.log('');

menuEl.forEach((el) => {

    console.log(`Category: ${el.firstElementChild.textContent}`);

    const listEL = el.lastElementChild;

    console.log(`Elements: ${listEL.children.length}`);
    console.log('');
});
    