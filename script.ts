interface Product {
  readonly id: number | string;
  name: string;
  price: number;
  brand: string;
  discount?: number;
  details: () => string;
  stock: number; // type added
}

interface productDetails extends Product {
  quantity: number;
  category: string;
}

let product: productDetails = {
  id: "12ui3434",
  name: "pen",
  price: 100,
  brand: "cello",
  details: () => "this product details page",
  stock: 11,
  quantity: 22,
  category: "copy",
};

console.log(product);
