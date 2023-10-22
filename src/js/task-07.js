const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("change", handleInput);

function handleInput() {
  span.style.fontSize = input.value + "px";
}
