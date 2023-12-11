'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${move}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interest = acc.movements
    .filter(move => move > 0)
    .map(move => (move * acc.interestRate) / 100)
    .filter((int, i) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent ===
      `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);

    console.log('LOGIN');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    transferTo &&
    currentAccount.balance >= amount &&
    transferTo.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    transferTo.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const accountIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(accountIndex, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// const max = movements.reduce((acc,move) => move > acc ? acc = move : acc, movements[0])
// console.log(max);
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdraws = movements.filter(mov => mov < 0);

// const balance = movements.reduce(function(acc,move) {
//   return acc + move;
// }, 0)

// console.log(balance);
// const eurToUsd = 1.1;

// const movementsToUsd = movements.map(move => move * eurToUsd);

// const movementsUSDFor = [];
// for(const mov of movements) movementsUSDFor.push(mov.eurToUsd);

// movements.map((move,i,arr) => {
//   if(move > 0){
//         return ` ${i + 1} You deposited ${move}`;
//       } else {
//         return ``;
//       }
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// // make copy of the array;
// console.log(arr.slice());
// console.log([...arr]);

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr.at(-1));

// for (const [i, move] of movements.entries()){
//   if(move > 0){
//     console.log(`${i + 1} You deposited ${move}`);
//   } else {
//     console.log(``);
//   }
// }

// movements.forEach(function(movement, index, array) {
//   if(movement > 0){
//     console.log(` ${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(``);
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set (['USD', 'EUR', 'GBP']);
// currenciesUnique.forEach(function(value, _, map) {
//   console.log(`${value}`);
// })

// const dogsJulia= [3, 5, 2, 12, 7];
// const dogsKate= [4, 1, 15, 8, 3];

// const checkDogs = function(dogsJulia, dogsKate){
//   const dogsJuliaTrue = dogsJulia.slice(1, -2);
//   const dogsKateTrue = dogsKate.slice(0);
//   const combinedDogs = [...dogsJuliaTrue, ...dogsKateTrue];
//   combinedDogs.forEach(function(year, index) {
//     console.log(`Dog number ${index + 1} is ${year >= 3 ? `an adult, and is ${year} years old` : `still a puppy`}`);
//   })
// }

// checkDogs(dogsJulia,dogsKate);

// const calcAverageHumanAge = function (arr) {
//   const humanAges = arr
//     .map(year => (year <= 2 ? year * 2 : 16 + year * 4))
//     .filter(year => year >= 18)
//     .reduce((acc, age, i, ar) => acc + age / ar.length, 0);
//   // const averageHumanAge =
//   //   humanAges.reduce(function (acc, age) {
//   //     return acc + age;
//   //   }, 0) / humanAges.length;

//   console.log(humanAges);
//   // console.log(averageHumanAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const firstWithdrawal = movements.find(mov => mov < 0);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const diceRolls = Array.from({length: 100}, () => Math.trunc(Math.random()*6 + 1));
// console.log(diceRolls);
// const sixes = diceRolls.filter(dic => dic === 6);
// console.log(sixes.length);

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

if (
  sarahDog.curFood <
  sarahDog.recommendedFood - sarahDog.recommendedFood * 0.1
) {
  console.log('Not enough');
} else if (
  sarahDog.curFood >
  sarahDog.recommendedFood + sarahDog.recommendedFood * 0
) {
  console.log('Too much');
} else {
  console.log('Ideal');
}

const ownersEatTooLittle = dogs
  .filter(dog => dog.recommendedFood > dog.curFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
const ownersEatTooMuch = dogs
  .filter(dog => dog.recommendedFood < dog.curFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

console.log(
  dogs.some(
    dog =>
      dog.curFood >= dog.recommendedFood * 0.9 &&
      dog.curFood <= dog.recommendedFood * 1.1
  )
);

const checkEatingOkay = dog => dog.curFood >= dog.recommendedFood * 0.9 &&
dog.curFood <= dog.recommendedFood * 1.1;

const okayEatingDogs = dogs.filter(
  dog =>
      dog.curFood >= dog.recommendedFood * 0.9 &&
      dog.curFood <= dog.recommendedFood * 1.1
)
console.log(okayEatingDogs);

const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);



// dogs.forEach(dog => dog.recommendedFood > dog.curFood ? ownersEatTooLittle.push(dog.owners) : ownersEatTooMuch.push(dog.owners));

// console.log(ownersEatTooLittle.flat());
// console.log(ownersEatTooMuch.flat());
