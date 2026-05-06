"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    name = 'lg';
    price = 10;
}
let d1 = new Device();
console.log(d1);
// class Person{
//     public name ;
//     public age ;
//     constructor(name: string , age : number  ){
//         this.name = name;
//         this.age = age;
//     }
// }
// ----------- OR ---------------
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let p1 = new Person("Khan", 20);
console.log(p1);
//# sourceMappingURL=app.js.map