'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDeliver: function(obj) {
    console.log(obj);
  }
};

let [main, ,secondary] = restaurant.categories;
[main, secondary] = [secondary, main];

const {name, openingHours, categories} = restaurant;

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

const {menu = [],starterMenu: starters = []} = restaurant;

let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14}
({a, b} = obj);


const {fri: {open, close}} =openingHours;

const newMenu = [...restaurant.mainMenu, `Gnocci`];

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];