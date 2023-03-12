function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const START_SIZE = 30;

const inputCount = document.querySelector("#controls input");
const boxesElement = document.querySelector("#boxes");

let size = START_SIZE;

function createBoxes(amount) {
  const boxes = Array(amount)
    .fill("")
    .map((item) => {
      const box = document.createElement("div");
      box.style.width = box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      size += 10;
      return box;
    });
  boxesElement.append(...boxes);
}

const btnCreateBoxes = document.querySelector("button[data-create]");
btnCreateBoxes.addEventListener("click", () => {
  const amount = Number(inputCount.value);
  createBoxes(amount);
});

const btnRemoveBoxes = document.querySelector("button[data-destroy]");
btnRemoveBoxes.addEventListener("click", () => {
  document.querySelectorAll("#boxes div").forEach((element) => {
    element.remove();
    size = START_SIZE;
  });
});