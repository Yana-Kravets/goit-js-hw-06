let textInput = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  textInput = event.currentTarget.value;

  textInput !== " " ? (outputEl.innerText = textInput.trim()) : "Anonymous";
}



