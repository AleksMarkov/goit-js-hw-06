const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  event.currentTarget.value.trim().length === 0
    ? (output.textContent = "Anonymous")
    : (output.textContent = event.currentTarget.value);
}
