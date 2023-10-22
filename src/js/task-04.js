const btnIncr = document.querySelector('[data-action = "increment"]');
const btnDecr = document.querySelector('[data-action = "decrement"]');
const valueItem = document.querySelector("#value");
let counterValue = 0;

btnDecr.addEventListener("click", handledecrClick);
btnIncr.addEventListener("click", handleincrClick);

function handledecrClick() {
  counterValue -= 1;
  valueItem.textContent = counterValue;
}
function handleincrClick() {
  counterValue += 1;
  valueItem.textContent = counterValue;
}
