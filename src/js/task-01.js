const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);
liItems.forEach(myFunction);
function myFunction(item) {
  const text = item.querySelector("h2");
  const total = item.querySelectorAll("li").length;
  console.log(`Category: ${text.textContent}`);
  console.log(`Elements: ${total} `);
}
