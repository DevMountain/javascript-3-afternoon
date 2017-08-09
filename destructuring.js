// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values from the object carDetails into new variables. 

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

// CODE HERE
// var {color, make, model, year} = carDetails;


// ========================


// In the function below named greeting, it is receiving an object as a parameter. Use object destructuring to save the object properties to new variables. The property names are firstName, lastName, and title. Return the concatenated string.

function greeting( obj ) {
  // CODE HERE
  
  // var {firstName, lastName, title} = obj
  
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}

// greeting({firstName: 'Henry', lastName: 'Von Eckleberry', title: 'Sir'})
// ANSWER: 'Hello, Sir Henry Von Eckleberry!'

// greeting({firstName: 'Betty', lastName: 'LeJavascript', title: 'Queen'})
// ANSWER: 'Hello, Queen Betty LeJavascript!'


// ========================


// Write a function called totalPopulation that will take in an object. That object will have 4 properties named utah, california, texas and arizona. The property values will be numbers. Use object destructuring to save the property values to new variables. Sum up the values and return the total number.

  // CODE HERE

// function totalPopulation(obj) {
//   var {utah, california, texas, arizona} = obj;
//   return utah + california + texas + arizona;
// }

// totalPopulation({utah: 10, california: 29087, texas: 82937, arizona: 28347})
// ANSWER: 140381

// totalPopulation({utah: 1045, california: 987, texas: 192937, arizona: 347})
// ANSWER: 195316


// ========================


// Write a function called ingrediants that will take in an object. This object will have 3 properties named carb, fat, and protein. The property values will be strings. Use object destructuring to save the property values to new variables. Push these new variables to an array and return the array. 

  // CODE HERE

// function ingrediants( obj ) {
//   var {carb, fat, protein} = obj;
//   return [carb, fat, protein]
// }

// ingrediants({carb: 'flour', fat: 'butter', protein: 'eggs'})
// ANSWER: [ 'flour', 'butter', 'eggs' ]

// ingrediants({carb: 'rice', fat: 'bacon grease', protein: 'chicken'})
// ANSWER: [ 'rice', 'bacon grease', 'chicken' ]


// ========================


// Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration. See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured object as it's parameter. The object properties will be named first, second, and third and their values will be numbers. Find the smallest number of the three and return that number.

  // CODE HERE

// function largeNumbers ( {first, second, third} ) {
//   return Math.min(first, second, third)
// }

// largeNumbers({first: 10, second: 2, third: 90})
// ANSWER: 2

// largeNumbers({first: 1, second: 2, third: 80})
// ANSWER: 1


// ========================


// Write a function called numberGroups that will take a destructured object as it's parameter. The object properties will be named a, b, and c and their values will be arrays of numbers. Find the longest array and return that array. 

  // CODE HERE

// function numberGroups( { a, b, c} ) {
//   var start = a.length > b.length ? a : b;
//   return start.length > c.length ? start : c;
// }

// numberGroups({a:[1, 2, 3], b:[1], c:[1, 2, 3, 4, 5]})
// ANSWER: [ 1, 2, 3, 4, 5 ]

// numberGroups({a:[1, 2, 3], b:[1, 2, 3, 4], c:[1, 2, 3]})
// ANSWER: [ 1, 2, 3, 4 ]