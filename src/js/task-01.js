// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
// В результаті, в консолі будуть виведені наступні повідомлення.

const elem = document.querySelectorAll("#categories");
const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);
liItems.forEach(myFunction);
function myFunction(item, index, arr) {
  const text = item.firstElementChild.innerText;
  const total = item.lastElementChild.children.length;
  console.log(`Category: ${text}`);
  console.log(`Elements: ${total} `);
}
