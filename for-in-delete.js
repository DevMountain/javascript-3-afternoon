/*
  Once you complete a problem, refresh ./for-in-delete.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

/*
  First we'll look at the difference between accessing property values in a for in loop and accessing the property name in a for in loop.
  In the example below, we are accessing the property values. Uncomment the code below, run it and look at what prints in the console.
*/

// var values = {
//   one: 'These',
//   two: ' are',
//   three: ' the',
//   four: ' property',
//   five: ' values.'
// } 

// for(var key in values) {
//   console.log(values[key])
// }

/*
  In this next example, we are accessing the property names themselves. Uncomment the code below, run it and look at what prints in the console.
*/

// for(var key in values) {
//   console.log(key)
// }



////////// PROBLEM 1 //////////

/*
  Inside the function showValues, write a for in loop that concatenates each of the property values and returns the concatenated string.
*/

function showValues( obj ) {
  //Code Here
}



////////// PROBLEM 2 //////////

/*
  Write a function called greaterThan10 that takes in an object. 
  Write a for in loop that loops over the object and changes any value that is great than 10 to 0. 
  Return the updated object.
*/

//Code Here



////////// PROBLEM 3 //////////

/*
  Write a function called double that takes in an object.
  Write a for in loop that loops over the object and changes every value to be itself multipled by 2.
  Return the updated object.
*/

//Code Here



////////// PROBLEM 4 //////////

/*
  Write a function called secrets that will take in an object.
  Create an empty string variable.
  Write a for in loop that loops over the object.
  If the property name starts with an 'sh', concatenate the value to the string variable.
  By the end of the for in loop, you should have a sentence, return that sentence.
*/

//Code Here



/* 
  Sometimes it's needed to delete object properties. 
  All you need is the word delete before a reference to the object property value. 
  Uncomment the example below to see a for in loop deleting all the properties inside an object.
*/

// var deleteAllThethings = {
//   one: 1,
//   two: 2,
//   three: 3
// }

// for(var key in deleteAllThethings) {
//   delete deleteAllThethings[key]
// }

// console.log(deleteAllThethings)



////////// PROBLEM 5 //////////

/*
  Write a function called removePassword that takes in an object.
  Delete the property password and return the object.
*/

//Code Here



////////// PROBLEM 6 //////////

// Do not edit the code below.
var deleteTheBigNumbers = {
  first: 10,
  second: 20,
  third: 110,
  fourth: 200
}
// Do not edit the code above.

/*
  Write a for in loop that deletes every property from the object deleteTheBigNumbers whose value is greater than 100.
*/

//Code Here



////////// PROBLEM 7 //////////

/*
  Write a function called startsWithK that takes an object as a parameter.
  Write a for in loop to loop over the object.
  If any property name starts with k, delete that property.
  Return the updated object.
*/

//Code Here



////////// PROBLEM 8 //////////

/*
  Write a function called hiddenTreasure that takes in an object.
  Write a for in loop that loops over this object. Each property will have a sentence as it's value.
  If the property value does not contain the word 'treasure', delete the property.
  Return the updated object.

  (hint: the method includes() may be of use...)
*/

//Code Here


