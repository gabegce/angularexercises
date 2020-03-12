"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = /** @class */ (function () {
    function Dog(balance, name) {
        this._balance = balance;
        this._name = name;
        console.info('Created ' + this);
    }
    Object.defineProperty(Dog.prototype, "balance", {
        get: function () { return this._balance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "oneLine", {
        get: function () {
            return this.name + " with balance $" + this.balance;
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}());
exports.Dog = Dog;
var dog = new Dog(1, "Baby Preshy");
console.log(dog.oneLine);
