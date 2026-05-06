class Device{
    name = 'lg';
    price = 10
}

let d1 = new Device();
console.log(d1)


// class Person{
//     public name ;
//     public age ;
//     constructor(name: string , age : number  ){
//         this.name = name;
//         this.age = age;
//     }
// }
// ----------- OR ---------------
class Person{
    constructor(public name :string, public age : number){}
}

let p1 = new Person("Khan" , 20)
console.log(p1)

class Student extends Person{
    constructor(name: string, age: number){
        super(name, age)
    }

    getInfo(){
        console.log(this.name, this.age)
    }
}

let s1 = new Student("khan", 20);
s1.getInfo()

// Access modifiers
class School {
    static address : string = "Pakistan"
    private teacher: string;
    public student: string;
    constructor(teacher: string, student : string){
        this.teacher = teacher
        this.student = student
    }

    get getTeacher(){
        return this.teacher;
    }

    set setTeacher(value : string){
        this.teacher = value
    }
}

class Syllabus {
    constructor(public readonly book: string, lab?: string){}
}






