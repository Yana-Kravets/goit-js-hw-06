const inputChange = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputChange.addEventListener("input", (event) => {
  const size = inputChange.value;

  textEl.style.fontSize = size + "px";
});




