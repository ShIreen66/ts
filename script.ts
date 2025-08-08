// object
// Type Alias (create validator)
// read-only and optional
// union type

type ID = number;

type Product = {
  readonly id: number | string | boolean;
  name: string;
  price: number;
  brand: string;
  discount?: number;
};

type ProductDetails = Product & {
  stock: number;
  category: string;
};

let product: ProductDetails = {
  id: "qw1223",
  name: "Pen",
  price: 10,
  brand: "Cello",
  discount: 10,
  stock: 10,
  category: "product"
};

product.name = "pencil";
// product.id = "123"; not change id value (error)

function createProduct(product: Product): Product {
  return product;
}

console.log(product);
