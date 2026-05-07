//functions
// function types
// optional and default parameters
// rest parameters
// overloads

function person(name: string, age: number, fight: (weapon: string) => void): void{
   fight('sword');
}

person('khan', 22, (weapon) => { console.log(weapon); })

function student(name: string, age: number, marks?: number){
    console.log(name, age, marks)
};

function user(name: string, age: number, access: string = "limit"){

}

function sum(...arr : number[]){
    console.log(arr)
}
sum(1,2,3,4,5,6)

// overload
function abc(a: string): void;
function abc(a: string , b: number): number;
function abc(a: string, b?: number): void | number{
    if(typeof a == "string" && typeof b == "undefined"){
        console.log("string")
        return;
    } 
    if (typeof a == "string" && typeof b == "number"){
        return 123;
    } else throw new Error("something went wrong")
}
 abc('hey')
 abc('hey', 123)

