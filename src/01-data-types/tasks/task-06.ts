/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */


type Product = {
    code: string;
    name: string;
    price: number;
    stock: number;
    weight: number;
    rating: number;
    isDiscounted: boolean;
};

const product1: Product = {
    code: "P001",
    name: "Keyboard",
    price: 250000,
    stock: 10,
    weight: 500,
    rating: 4.8,
    isDiscounted: true
};

const product2: Product = {
    code: "P002",
    name: "Mouse",
    price: 100000,
    stock: 20,
    weight: 200,
    rating: 4.5,
    isDiscounted: false
};

const product3: Product = {
    code: "P003",
    name: "Headset",
    price: 150000,
    stock: 15,
    weight: 300,
    rating: 4.7,
    isDiscounted: true
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);
