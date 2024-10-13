// Ul elementini seçiyoruz
const categories = document.querySelector("#categories");

// Kategorilerin sayısını hesaplayıp konsola yazdırıyoruz
const categoryItems = categories.querySelectorAll(".item");
console.log(`Num of categories: ${categoryItems.length}`);

// Her bir kategori için başlığı ve öğe sayısını konsola yazdırıyoruz
categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount} `);
});
