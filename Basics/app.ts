// Primtive Data Types
let age: number = 20;
let name: string = "sharjeel";
let isAdult: boolean = true;

// Reference
let a: number[] = [1, 2, 3, 4]
let b = a;
b.pop(); // b ki jo value hogi o a ki bhi hogi.

// Array 
let arr: number[] = [1, 2, 3, 4,];

// Tuples 
let tup: [number , string] = [20, "khan"]

// Enums
enum StatusCodes {
    NOTFOUND = 404,
    ERROR = 505
}

StatusCodes.ERROR

// Any
let an;
an = 11;
an = "khan"
an = true


// void 
function nothing(): void{
    // return nothing
}


// interfaces
interface User{
    name : string,
    email : string,
    password :string,
    gender?: string
}
function addPerson(obj: User){
    obj.email
    obj.name // etc
}

addPerson({
    name : "sharjeel",
    email : "example.com",
    password : '1234'
})


// interfaces extend
interface Admin extends User{
    admin : boolean;
}

// Type
type myType = number | string
let x: myType ;