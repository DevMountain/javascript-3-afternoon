describe('filters1', ()=>{
  describe('evenNumbers', ()=>{
    it('should exist', ()=>{
      expect(evenNumbers).toBeDefined();
    })
    it('should be an array', ()=>{
      expect(evenNumbers.length).toBeDefined();
    })
    it('should have 8 elements', ()=>{
      expect(evenNumbers.length).toBe(8);
    })
    it('should have the correct elements', ()=>{
      expect(evenNumbers.sort().toString()).toBe([6, 2, 6, 8, 4, 2, 8, 4].sort().toString());
    })
  })
})

describe('map1', ()=>{
  describe('postTaxPrices', ()=>{
    it('should exist', ()=>{
      expect(postTaxPrices).toBeDefined();
    })
    it('should be an array', ()=>{
      expect(postTaxPrices.length).toBeDefined();
    })
    it('should have 9 elements', ()=>{
      expect(postTaxPrices.length).toBe(9);
    })
    it('should have the correct prices', ()=>{
      let incorrect = [16.05, 24.610000000000003, 83.46000000000001, 36.38,
        12.84, 92.02000000000001, 12.84, 84.53, 34.24].reduce(
        (p, e, i)=>p||(Math.abs(e-postTaxPrices[i])>.02), false)
      expect(incorrect).toBe(false);
    })
  })
})

describe('reduce1', ()=>{
  describe('totalPopulation', ()=>{
    it('should exist', ()=>{
      expect(totalPopulation).toBeDefined();
    })
    it('should have the correct total', ()=>{
      expect(totalPopulation).toBe(16763615);
    })
  })
})

describe('filters2', ()=>{
  describe('myStrongest', ()=>{
    it('should exist', ()=>{
      expect(myStrongest).toBeDefined();
    })
    it('should be an array', ()=>{
      expect(myStrongest.length).toBeDefined();
    })
    it('should have 9 elements', ()=>{
      expect(myStrongest.length).toBe(9);
    })
    it('should have the correct monsters', ()=>{
      expect(myStrongest.map(e=>e.monster).sort().toString())
        .toEqual(monstersInYourPocket.filter(e=>e.CP>200).map(e=>e.monster).sort().toString());
      expect(myStrongest.map(e=>e.CP).sort().toString())
        .toEqual(monstersInYourPocket.filter(e=>e.CP>200).map(e=>e.CP).sort().toString());
    })
  })
})

describe('map2', ()=>{
  describe('ordersTotal', ()=>{
    it('should exist', ()=>{
      expect(ordersTotal).toBeDefined();
    })
    it('should be an array', ()=>{
      expect(ordersTotal.length).toBeDefined();
    })
    it('should have 10 elements', ()=>{
      expect(ordersTotal.length).toBe(10);
    })
    it('should have the correct prices', ()=>{
      let incorrect = [16.35, 44.940000000000005, 62.160000000000004,
        88.80000000000001, 73.14, 77.52000000000001, 82.08000000000001,
        55.59, 102.35, 54.239999999999995].reduce(
        (p, e, i)=>p||(Math.abs(e-ordersTotal[i])>.02), false)
      expect(incorrect).toBe(false);
    })
  })
})

describe('reduce2', ()=>{
  describe('bobsTotal', ()=>{
    it('should exist', ()=>{
      expect(bobsTotal).toBeDefined();
    })
    it('should have the correct total', ()=>{
      expect(bobsTotal).toBe(891);
    })
  })
})

// describe('fns-and-scope', function () {
//
//
// 	describe('isTyler', function () {
// 		it('should exist', function () {
// 			expect(isTyler).toBeDefined();
// 		})
// 		it('should return true if passed "Tyler"', function () {
// 			expect(isTyler('Tyler')).toBe(true);
// 		})
// 		it('should return false if passed something other than "Tyler"', function () {
// 			expect(isTyler('Stan')).toBe(false);
// 		})
// 	})
//
// 	describe('getName', function () {
// 		beforeEach(function () {
// 			// var prompt = function () {
// 			// 	return true;
// 			// }
//
// 			spyOn(window, 'prompt').and.returnValue('My Name');
//
// 		})
// 		it('should exist', function () {
// 			expect(getName).toBeDefined();
// 		})
// 		it('should invoke prompt()', function () {
// 			getName();
// 			expect(window.prompt).toHaveBeenCalled();
// 		})
// 		it('should return the name input from the prompt', function () {
// 			var name = getName();
// 			expect(name).toBe('My Name');
// 		})
// 	})
//
// 	describe('welcome', function () {
// 		beforeEach(function () {
// 			spyOn(window, 'prompt').and.returnValue('Rockstar');
// 			spyOn(window, 'alert').and.returnValue('Welcome ' + prompt());
// 			spyOn(window, 'getName').and.returnValue('Rockstar');
// 			// var getName = jasmine.createSpy().and.returnValue('Rockstar');
// 		})
// 		it('should exist', function () {
// 			expect(welcome).toBeDefined();
// 		})
// 		it('should invoke getName()', function () {
// 			welcome();
// 			expect(getName).toHaveBeenCalled();
// 		})
// 		it('should invoke alert()', function () {
// 			welcome();
// 			expect(alert).toHaveBeenCalled();
// 		})
// 		it('should alert "Welcome, " plus the name', function () {
// 			welcome();
// 			expect(alert).toHaveBeenCalledWith('Welcome, Rockstar')
// 		})
// 	})
//
// 	describe('myName', function () {
// 		it('should exist', function () {
// 			expect(myName).toBeDefined();
// 		})
// 		it('should return a string', function () {
// 			var name = myName();
// 			expect(name).toEqual(jasmine.any(String));
// 		})
// 	})
//
// 	describe('newMyName', function () {
// 		it('should exist', function () {
// 			expect(newMyName).toBeDefined();
// 		})
// 		it('should be a function', function () {
// 			expect(newMyName).toEqual(jasmine.any(Function));
// 		})
// 	})
//
// 	describe('outerFn', function () {
// 		it('should exist', function () {
// 			expect(outerFn).toBeDefined();
// 		})
// 		it('should return a function', function () {
// 			var fn = outerFn();
// 			expect(fn).toEqual(jasmine.any(Function));
// 		})
// 		it('should return a function that returns a string', function () {
// 			var fn = outerFn();
// 			var str = fn();
// 			expect(str).toEqual(jasmine.any(String));
// 		})
// 	})
//
// 	describe('innerFn', function () {
// 		it('should exist', function () {
// 			expect(innerFn).toBeDefined();
// 		})
// 		it('should be a function', function () {
// 			expect(innerFn).toEqual(jasmine.any(Function));
// 		})
// 		it('should return a string', function () {
// 			var str = innerFn();
// 			expect(str).toEqual(jasmine.any(String));
// 		})
// 	})
//
// })
