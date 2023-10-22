const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const liEls = [];

ingredients.forEach(myFunction);

function myFunction(item) {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  liEl.classList.add("item");
  liEls.push(liEl);
}

list.append(...liEls);
