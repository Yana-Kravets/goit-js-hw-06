const nameInput = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutputEl.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value;
});