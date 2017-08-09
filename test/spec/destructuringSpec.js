// ========================

describe('Object destructuring for new variables', function () {
  describe('color', function () {
    it('should exist', function () {
      expect(color).toBeDefined();
    })
    it('should have the correct value', function () {
      expect(color).toBe('red');
    })
  })

  describe('model', function () {
    it('should exist', function () {
      expect(model).toBeDefined();
    })
    it('should have the correct value', function () {
      expect(model).toBe('tacoma');
    })
  })

  describe('make', function () {
    it('should exist', function () {
      expect(make).toBeDefined();
    })
    it('should have the correct value', function () {
      expect(make).toBe('toyota');
    })
  })

  describe('year', function () {
    it('should exist', function () {
      expect(year).toBeDefined();
    })
    it('should have the correct value', function () {
      expect(year).toBe(1994);
    })
  })
})


// ========================


describe('greeting', function () {
  it('should exist', function () {
    expect(greeting).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(greeting({firstName: 'Henry', lastName: 'Von Eckleberry', title: 'Sir'})).toBe('Hello, Sir Henry Von Eckleberry!');
    expect(greeting({firstName: 'Betty', lastName: 'LeJavascript', title: 'Queen'})).toBe('Hello, Queen Betty LeJavascript!');
  })
})


// ========================


describe('totalPopulation', function () {
  it('should exist', function () {
    expect(totalPopulation).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(totalPopulation({utah: 10, california: 29087, texas: 82937, arizona: 28347})).toBe(140381);
    expect(totalPopulation({utah: 1045, california: 987, texas: 192937, arizona: 347})).toBe(195316);
  })
})


// ========================


describe('ingrediants', function () {
  it('should exist', function () {
    expect(ingrediants).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(ingrediants({carb: 'flour', fat: 'butter', protein: 'eggs'}).sort()).toEqual([ 'flour', 'butter', 'eggs' ].sort());
    expect(ingrediants({carb: 'rice', fat: 'bacon grease', protein: 'chicken'}).sort()).toEqual([ 'rice', 'bacon grease', 'chicken' ].sort());
  })
})


// ========================


// Now we will use object destructuring as the function's parameter instead of destructuring inside of the function declaration. See the example below:

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