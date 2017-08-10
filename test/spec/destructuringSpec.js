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


describe('ingredients', function () {
  it('should exist', function () {
    expect(ingredients).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(ingredients({carb: 'flour', fat: 'butter', protein: 'eggs'}).sort()).toEqual([ 'flour', 'butter', 'eggs' ].sort());
    expect(ingredients({carb: 'rice', fat: 'bacon grease', protein: 'chicken'}).sort()).toEqual([ 'rice', 'bacon grease', 'chicken' ].sort());
  })
})


// ========================


describe('largeNumbers', function () {
  it('should exist', function () {
    expect(largeNumbers).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(largeNumbers({first: 10, second: 2, third: 90})).toBe(2);
    expect(largeNumbers({first: 1, second: 2, third: 80})).toBe(1);
  })
})


// ========================


describe('numberGroups', function () {
  it('should exist', function () {
    expect(numberGroups).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(numberGroups({a:[1, 2, 3], b:[1], c:[1, 2, 3, 4, 5]})).toEqual([ 1, 2, 3, 4, 5 ]);
    expect(numberGroups({a:[1, 2, 3], b:[1, 2, 3, 4], c:[1, 2, 3]})).toEqual([ 1, 2, 3, 4 ]);
  })
})
