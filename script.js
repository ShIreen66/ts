// public
// class Product {
//   name: string = "qwerty";
//   price: number = 12 ;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let x = new Product("pen", 200);
// console.log(x);
// private
// class Product {
//   constructor(private name: string, private price: number) {}
//   get showDetails() {
//     return `${this.name}, ${this.price}`;
//   }
//   set getId(id: number | string) {
//     // return `${this.name}, ${this.price}`;
//     console.log(id)
//   }
// }
// let x = new Product("pen", 200);
// console.log(x.showDetails);
// Class
// class Car {
//   brand: string;
//   constructor(brand: string) {
//     this.brand = brand;
//   }
//   drive() {
//     console.log(`${this.brand} is driving...`);
//   }
// }
// const car1 = new Car("Toyota");
// car1.drive();
// class Person {
//   public name: string;
//   private age: number;
//   protected city: string;
//   constructor(name: string, age: number, city: string) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }
//   showInfo() {
//     console.log(this.name, this.age, this.city);
//   }
// }
// class Student extends Person {
//   showCity() {
//     console.log(this.city);
//   }
// }
// const p1 = new Person("Amit", 25, "Delhi");
// console.log(p1.name);
// Getter and Setter
// class BankAccount {
//   private _balance: number = 0;
//   get balance() {
//     return this._balance;
//   }
//   set balance(amount: number) {
//     if (amount >= 0) {
//       this._balance = amount;
//     } else {
//       console.log("Negative balance not allowed!");
//     }
//   }
// }
// const acc = new BankAccount();
// acc.balance = 889898;
// console.log(acc.balance);
// Interface
// interface Details {
//   name: string;
//   price: number;
//   getDetails: () => {};
// }
// class Product implements Details {
//   constructor(public name: string, public price: number) {}
//   getDetails: () => {};
// }
// Abstract
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.print = function () {
        console.log("This is a shape");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var c = new Circle(5);
console.log(c.area()); // 78.53...
