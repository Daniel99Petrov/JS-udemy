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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
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

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  const accountIndex = accounts.findIndex(acc => acc.username === inputCloseUsername.value);
  const accountPin = inputClosePin.value;
  // ??
})
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

const calcAverageHumanAge = function (arr) {
  const humanAges = arr
    .map(year => (year <= 2 ? year * 2 : 16 + year * 4))
    .filter(year => year >= 18)
    .reduce((acc, age, i, ar) => acc + age / ar.length, 0);
  // const averageHumanAge =
  //   humanAges.reduce(function (acc, age) {
  //     return acc + age;
  //   }, 0) / humanAges.length;

  console.log(humanAges);
  // console.log(averageHumanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const firstWithdrawal = movements.find(mov => mov < 0);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
