// object
// Type Alias (create validator)
// read-only and optional
// union type
var product = {
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
function createProduct(product) {
    return product;
}
console.log(product);
