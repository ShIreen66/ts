// object
// Type Alias (create validator)
// read-only and optional
// union type

// type ID = number;

// type Product = { name: string; price: number; brand: string };

// let product: Product = {
//   name: "Pen",
//   price: 10,
//   brand: "Cello",
// };

// function createProduct(product: Product): Product {
//   return product;
// }

// console.log(product);

//  they can be anonymous:

type Person = {
  name: string;
  age?: number;
};

let user: Person = { name: "Amit" };

console.log(user);
