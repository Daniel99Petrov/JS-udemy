'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.calcAge = function() {
//         console.log(2037 - this.birthYear);
//     }
// }

// const jonas = new Person('Jonas', 1999);
// console.log(jonas);
// console.log(jonas instanceof Person);
// // New empty obj is created
// // Func is called, this = {}
// // {} is linked to a prot
// // Func automatically returns {}

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }




// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.brake();
// car1.brake();

//class expression
// const PersonCl = class {}

//class declaration


// const account = {
//     owner: 'jonas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }
// }

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.calcAge = function() {
//         console.log(2037 - this.birthYear);
//     }
// }

// Person.hey = function() {
//     console.log('Hey');
//     console.log(this);
// };
// Person.hey();


// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
// }

// const steve = Object.create(PersonProto);
// steve.name = 'Steven';
// steve.birthYear = '2000';

// steve.calcAge();

// class Car {
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//     }

//     brake() {
//         this.speed -=5;
//     }

//     get speedUs() {
//         return Math.trunc(this.speed/1.6);
//     }

//     set speedUs(speed) {
//         this.speed = speed * 1.6;

//     }
// }

// const Student = function(firstName, birthYear, course) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.course = course;
// }

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 1999, 'Computer Science');
// mike.introduce();
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    set fullName(name) {
        if(this.name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log('Hey');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName,birthYear)
        this.course = course;
    }

    introduce() {
        console.log();
    }
}

const dani = new StudentCl('Daniel Petrov', 1999, 'JS');

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.brake = function() {
//     this.speed -=5;
//     console.log(this.speed);
// }
// const Ev = function(make,speed,charge){
//     Car.call(this,make,speed);
//     this.charge = charge;
// }
// console.log(Car.prototype);
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }

// Ev.prototype.accelerate = function() {
//     this.speed +=50;
//     console.log(this.speed);
// }

// // console.log(Ev);
// console.log(Ev.prototype);

// const ev = new Ev('Tesla', 100, 55);
// const v = new Car('BMW', 40);
// ev.accelerate();
// v.accelerate();