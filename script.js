'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 199 * numPassenger
// ) {
//   //es5
//   //   numPassenger = numPassenger || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const paul = {
//   name: 'Paul Christopher',
//   passport: 947851923,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 947851923) {
//     alert('Checked In');
//   } else {
//     alert('Incorrect Passport');
//   }
// };

// checkIn(flight, paul);
// console.log(flight);
// console.log(paul);

// // is the same as doing
// const flightNum = flight;
// const passenger = paul;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };

// newPassport(paul);
// checkIn(flight, paul);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function
const transformer = function (str, fn) {
  console.log(`Original String:${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
