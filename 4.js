// Задание 4
const products1 = [
   {
      id: 3,
      price: 127,
      photos: [
         "1.jpg",
         "2.jpg",
      ],
   },
   {
      id: 5,
      price: 499,
      photos: [],
   },
   {
      id: 10,
      price: 26,
      photos: [
         "3.jpg",
      ],
   },
   {
      id: 8,
      price: 78,
   },
];
//в1
let productsNew = products1.filter(item => item.photos ? item.photos.length : undefined);
console.log(productsNew);
//в2
let productsNew1 = products1.filter(item => item.photos?.length);
console.log(productsNew1);

products1.sort((x1, x2) => x1.price - x2.price);
console.log(products1);
