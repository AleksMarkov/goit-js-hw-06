const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

createMarkup(images);

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ url, alt }) => `
      <li class="gallery-item"><img src="${url}" alt="${alt}"></img></li>`
    )
    .join("");
  list.insertAdjacentHTML("afterbegin", markup);
}
// other way:
// const list = document.querySelector(".gallery");
// let imgEl = ``;
// images.forEach(myFunction);
// function myFunction(item) {
//   imgEl += `<li class="gallery-item"><img src="${item.url}" alt="${item.alt}"></img></li>`;
// }
// list.insertAdjacentHTML("afterbegin", imgEl);
