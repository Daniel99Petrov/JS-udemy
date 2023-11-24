// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);
// if (x === 23) console.log(`My number is ${x}`);
// if (x === 23) console.log("My number is 23");
const temps = [17, 21, 23];

const printForecast = function(arr) {
    let forecast = `...`;
    for (let i = 0; i < arr.length; i++) {
        forecast += (` ${arr[i]} degrees in ${i + 1} days ...`);
    }
    console.log(forecast);
}

printForecast(temps);

