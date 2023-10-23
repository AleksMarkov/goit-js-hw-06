function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesDiv = document.getElementById("boxes");
const input = document.querySelector("input");

destroyButton.addEventListener("click", handleDestroyClick);
createButton.addEventListener("click", handleCreateClick);

function handleCreateClick() {
  const numberBox = Number(document.querySelector("input").value);
  input.disabled = true;
  createBoxes(numberBox);
}

function handleDestroyClick() {
  boxesDiv.innerHTML = "";
  input.disabled = false;
  input.value = "";
}

function createBoxes(boxes) {
  for (let i = 0; i < boxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesDiv.appendChild(box);
  }
}
