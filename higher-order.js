/*
  Once you complete a problem, refresh ./higher-order.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];
// Do not edit the code above.

/*
  Use the filter method on mixedNumbers to make a new array of just the even numbers.

  The filter function takes a callback with the parameters
  function(element, index, wholeArray){}  Function Form
  (element, index, wholeArray)=>{}    Arrow Form
*/

//Code Here
let evenNumbers // = mixedNumbers.filter(/* Provide Your Callback Here */)



////////// PROBLEM 2 //////////

// Do not edit the code below.
const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];
// Do not edit the code above.

/*
  Use the map method on the prices array to calculate a new array of post-tax prices.
  Use a 7% tax rate.

  Math reminder! To calculate the price after tax, multiply the price by 1 plus the taxRate as a decimal.
  Example: if tax is 7%, the price afterTax could be calculated like this: afterTax = price * 1.07) 

  The map function also takes a callback with the parameters
  function(element, index, wholeArray){}  Function Form
  (element, index, wholeArray)=>{}    Arrow Form
*/

//Code Here
let postTaxPrices // = prices.map(/* Provide Your Callback Here );



////////// PROBLEM 3 //////////

// Do not edit the code below.
const populations = [8175133, 3792621, 2695598, 2100263];
// Do not edit the code above.

/*
  Use the reduce method to calculate the sum of all the populations in the array.

  The reduce function has a slightly different setup for it's callback.
  function(runningTotal, curElement, curIndex, wholeArray){} Function Form
  (runningTotal, curElement, curIndex, wholeArray)=>{} Arrow Form
*/

//Code Here
let totalPopulation //  = populations.reduce(/* Provide Your Callback Here */)



////////// PROBLEM 4 //////////

// Do not edit the code below.
const monstersInYourPocket = [{"monster":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
{"monster":"Bulbabunny","CP":250},{"monster":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
{"monster":"Pikadoughnet","CP":207},{"monster":"Bulbabunny","CP":139},{"monster":"Pikadoughnet","CP":47},
{"monster":"Pikadoughnet","CP":175},{"monster":"WaterHorsia","CP":26},{"monster":"Ponylopse","CP":19},
{"monster":"Pikadoughnet","CP":218},{"monster":"Charaflier","CP":101},{"monster":"WaterHorsia","CP":96},
{"monster":"Pikadoughnet","CP":253},{"monster":"Sandmush","CP":146},{"monster":"Bulbabunny","CP":247},
{"monster":"Charaflier","CP":55},{"monster":"Bulbabunny","CP":72},{"monster":"Pikadoughnet","CP":300},
{"monster":"Sandmush","CP":262},{"monster":"Sandmush","CP":25},{"monster":"Charaflier","CP":215},
{"monster":"Ponylopse","CP":125},{"monster":"Bulbabunny","CP":178}];
// Do not edit the code above.

/*
  Now we're going to ramp these up a little bit.
  Instead of just arrays of numbers, we are going to have array of objects that we want to use map, filter, and reduce with.

  Use the filter method to return only the monsters that have a CP of over 200.
*/

//Code Here
let myStrongest // = monstersInYourPocket.filter(/* Provide Your Callback Here */)



////////// PROBLEM 5 //////////

// Do not edit code below.
const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}];
// Do not edit code above.

/*
  Use a higher order method to get the sum of all the order totals after adding in the sales tax
*/

let ordersTotal //Code Here



////////// PROBLEM 6 //////////

// Do not edit the code below.
const purchases = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
{"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
{"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
{"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
{"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
{"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
{"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}];
// Do not edit the code above.

/*
  Use a high order method to create to get the sum of bobsTotal.
*/

let bobsTotal //Code Here


