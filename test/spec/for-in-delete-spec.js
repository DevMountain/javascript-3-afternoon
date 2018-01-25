describe('showValues', function () {
  it('should exist', function () {
    expect(showValues).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(showValues({one: 'These', two: ' are', three: ' the', four: ' property', five: ' values.'})).toBe('These are the property values.');
    expect(showValues({one: 'Conquer', two: ' the', three: ' world', four: ' as a', five: ' javascript ninja!'})).toBe('Conquer the world as a javascript ninja!');
  })
})

// ========================

describe('greaterThan10', function () {
  it('should exist', function () {
    expect(greaterThan10).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(greaterThan10({one: 1, two: 2, three: 11, four: 44, five: 5})).toEqual({ one: 1, two: 2, three: 0, four: 0, five: 5 });
    expect(greaterThan10({one: 10, two: 20, three: 11, four: 4, five: 335})).toEqual({ one: 10, two: 0, three: 0, four: 4, five: 0 });
  })
})

// ========================


describe('double', function () {
  it('should exist', function () {
    expect(double).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(double({one: 1, two: 2, three: 3})).toEqual({ one: 2, two: 4, three: 6 });
    expect(double({one: 177, two: 2234, three: 23})).toEqual({ one: 354, two: 4468, three: 46 });
  })
})


// ========================


describe('secrets', function () {
  it('should exist', function () {
    expect(secrets).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(secrets({shhh: 'I really', one: 'this is no secret', shake: ', really love ', shed: 'javascript!', two: 'this also does not belong'})).toBe('I really, really love javascript!');
    
    expect(secrets({sh: 'Cheese', sally: 'this is no secret', shake: ' is', shed: ' disgusting :(', sue: 'this also does not belong', s: 'nope!'})).toBe('Cheese is disgusting :(');
  })
})


// ========================


describe('removePassword', function () {
  it('should exist', function () {
    expect(removePassword).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(removePassword({username: 'happyCow23', password: '123jumptheMoon'})).toEqual({ username: 'happyCow23' });
    expect(removePassword({username: 'JSQueen', password: 'es6RulesTheWorld'})).toEqual({ username: 'JSQueen' });
  })
})


// ========================


describe('deleteTheBigNumbers', function () {
  it('should exist', function () {
    expect(deleteTheBigNumbers).toBeDefined();
  })
  it('properties should be deleted in the for in loop', function () {
    expect(deleteTheBigNumbers).toEqual({first: 10, second: 20});
  })
})


// ========================


describe('startsWithK', function () {
  it('should exist', function () {
    expect(startsWithK).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(startsWithK({kitty: 2, dog: 3, cat: 4})).toEqual({ dog: 3, cat: 4 });
    expect(startsWithK({snake: 2, cougar: 3, kangaroo: 4})).toEqual({ snake: 2, cougar: 3 });
  })
})


// ========================


describe('hiddenTreasure', function () {
  it('should exist', function () {
    expect(hiddenTreasure).toBeDefined();
  })
  it('should return the correct value', function () {
    expect(hiddenTreasure({one: 'this has none', two: 'big treasure!', three: 'only disappointment'})).toEqual({ two: 'big treasure!' });
    expect(hiddenTreasure({one: 'happiness but no money', two: 'puppies are always a treasure', three: 'rocks, lots of rocks'})).toEqual({ two: 'puppies are always a treasure' });
  })
})