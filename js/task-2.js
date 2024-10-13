const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ul.gallery elementini seçiyoruz
const gallery = document.querySelector(".gallery");

// images dizisini kullanarak <li> ve <img> elemanlarını oluşturuyoruz
const galleryItems = images
  .map(({ url, alt }) => {
    return `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`;
  })
  .join("");

// Galeri elemanlarını DOM'a ekliyoruz
gallery.insertAdjacentHTML("beforeend", galleryItems);
