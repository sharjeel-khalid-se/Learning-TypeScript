// Generic function

function log<T>(a : T){
    console.log(a)
}

log<string>("hello")

//Generic interface

interface User<T> {
    name : string, 
    age : number, 
    id : T
}

function person(obj : User<string>){
    console.log(obj.id)
}

person({ name : "khan", age : 20, id : 'shfoaldsfh'})

// Generic class

class Person<T> {
    constructor( public key : T){}
}

let p1 = new Person<string>('123sdf')

