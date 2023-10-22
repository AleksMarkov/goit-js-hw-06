const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);
liItems.forEach(myFunction);
function myFunction(item) {
  const text = item.firstElementChild.textContent;
  const total = item.lastElementChild.children.length;
  console.log(`Category: ${text}`);
  console.log(`Elements: ${total} `);
}
