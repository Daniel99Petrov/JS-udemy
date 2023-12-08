'use strict';

// const greet = ((greeting,name) => console.log(`${greeting}, ${name}`));

// greet('hey', 'Daniel');

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat of ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(313, 'Daniel');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sara');
// console.log(eurowings);


// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')} \n Write option number: `));
//     typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array'){
//     if(type === 'array'){
//       console.log(this.answers);
//     } else if(type === 'string'){
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };

// document.querySelector(".poll").addEventListener('click', poll.registerNewAnswer.bind(poll));


const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
booker();
booker();
booker();

let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  };
};

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

g();
f();
h();
f();

// const boardPassengers = function (n, wait){
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are boarding all ${n} passengers`),
//     console.log(`There are 3 groups, each one with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(200, 4);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red'; 
  const change = function() {
    header.style.color = 'blue';
  }
  document.body.addEventListener('click', change);
})();