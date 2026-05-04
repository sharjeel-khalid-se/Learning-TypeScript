"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Primtive Data Types
let age = 20;
let name = "sharjeel";
let isAdult = true;
// Reference
let a = [1, 2, 3, 4];
let b = a;
b.pop(); // b ki jo value hogi o a ki bhi hogi.
// Array 
let arr = [1, 2, 3, 4,];
// Tuples 
let tup = [20, "khan"];
// Enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NOTFOUND"] = 404] = "NOTFOUND";
    StatusCodes[StatusCodes["ERROR"] = 505] = "ERROR";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.ERROR;
// Any
let an;
an = 11;
an = "khan";
an = true;
// void 
function nothing() {
    // return nothing
}
function addPerson(obj) {
    obj.email;
    obj.name; // etc
}
addPerson({
    name: "sharjeel",
    email: "example.com",
    password: '1234'
});
//# sourceMappingURL=app.js.map