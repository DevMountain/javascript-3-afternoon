// Filter, Map, Reduce

// Below we have an array of numbers
// We want to filter down to just the even numbers

// The filter function takes a callback with the parameters
// function(element, index, wholeArray){}  Function Form
// (element, index, wholeArray)=>{}    Arrow Form

const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];

let evenNumbers // = mixedNumbers.filter(/* Provide Your Callback Here */)

// Below we have an array of prices.  We want to calculate their totals after
// We want to use a map function on the prices to calculate a new array of
// post tax prices.  We'll use a 7% tax rate.

// Math reminder times the price by 1 + taxRate as a decimal
// ie (price * 1.07)

// The map function also takes a callback with the parameters
// function(element, index, wholeArray){}  Function Form
// (element, index, wholeArray)=>{}    Arrow Form

const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];

let postTaxPrices // = prices.map(/* Provide Your Callback Here );



// Below we have an array of populations.
// We want to use a reduce to calculate the sum of all the populations.

// The reduce function has a slightly different setup for it's callback
// function(runningTotal, curElement, curIndex, wholeArray){} Function Form
// (runningTotal, curElement, curIndex, wholeArray)=>{} Arrow Form

const populations = [8175133, 3792621, 2695598, 2100263]

let totalPopulation //  = populations.reduce(/* Provide Your Callback Here */)

// Now we're going to ramp up these a little bit.  Instead of just arrays of numbers
// We are going to have array of objects that we want to use map filter and reduce with

// Below we have an array of totally unique monsters we want to use a filter
// function to return only the monsters that have a CP of over 200

const monstersInYourPocket = [{"monster":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
{"monster":"Bulbabunny","CP":250},{"monster":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
{"monster":"Pikadoughnet","CP":207},{"monster":"Bulbabunny","CP":139},{"monster":"Pikadoughnet","CP":47},
{"monster":"Pikadoughnet","CP":175},{"monster":"WaterHorsia","CP":26},{"monster":"Ponylopse","CP":19},
{"monster":"Pikadoughnet","CP":218},{"monster":"Charaflier","CP":101},{"monster":"WaterHorsia","CP":96},
{"monster":"Pikadoughnet","CP":253},{"monster":"Sandmush","CP":146},{"monster":"Bulbabunny","CP":247},
{"monster":"Charaflier","CP":55},{"monster":"Bulbabunny","CP":72},{"monster":"Pikadoughnet","CP":300},
{"monster":"Sandmush","CP":262},{"monster":"Sandmush","CP":25},{"monster":"Charaflier","CP":215},
{"monster":"Ponylopse","CP":125},{"monster":"Bulbabunny","CP":178}]

let myStrongest // Your code here

// Below we have an array of orders.  but they all have different tax rates.
// We want to make a new array of total prices.

const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}]

let ordersTotal // Your code here

// Below we have an array of purchases
// We want to create a total for the purcahses, but only want to total Bob's
// purchases

const purchases = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
{"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
{"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
{"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
{"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
{"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
{"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}]

let bobsTotal // Your code here
