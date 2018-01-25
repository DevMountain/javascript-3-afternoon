describe('Update Employee Info', function() {
    var returnedArr;
    it('Theo Trill object should be removed', function() { 
        returnedArr = employeeUpdater();
        var flag = true;
        returnedArr.map(function(employee) {
            if (employee.firstName === 'Theo') flag = false;
        }) 
      expect(flag).toEqual(true);
    })

    it('Lorie should be in HR department', function() {
        var flag = true;
        var lorie = returnedArr.filter(e => e.firstName === 'Lorie')
        expect(lorie[0].department).toEqual('HR');
    })
  })

  describe('Workplace accidents', function() {
      it('removeDuplicates function should exist', function() {
          expect(removeDuplicates).toEqual(jasmine.any(Function));
      })
      it('removeDuplicates should return the array of workplace accidents', function() {
          returnedArr = removeDuplicates([12, 56, 44, 3, 29, 56, 56, 3, 7, 12])
          expect(returnedArr).toEqual(jasmine.any(Array));
      })
      it ('Should remove all duplicate entries', function() {
          var returnedArr = removeDuplicates([12, 56, 44, 3, 29, 56, 56, 3, 7, 12]).sort(function(a,b) {
              return a - b;
          });
          expect(returnedArr).toEqual(jasmine.any(Array));
          var answer = [3,7,12,29,44,56];
          var flag = true;
          returnedArr.map( (n,i) => {
              if( n[i] !== answer[i]) flag = false;
          })
          expect(returnedArr.length).toEqual(6);
      })
  })

  describe('Fluffy & friends', function() { 

    it('grumpyActivity value should be \'eat food\'', function() {
        expect(grumpyActivity).toEqual('eat food')
      })
    it('fluffy2ndFriend should be "Lazy Bones"', function() {
        expect(fluffy2ndFriend).toEqual('Lazy Bones');
    })
  })

  describe('Driving record', function() {
      it('recordCleaner should exist', function() {
          expect(recordCleaner).toEqual(jasmine.any(Function));
      })
      it('No longer at fault for accidents', function() {
          recordCleaner();
          console.log(myCar)
          var flag = true;
          myCar.accidents.map(function(accident) {
              if (accident.atFaultForAccident) {
                  flag = false;
              }
          })
            expect(flag).toEqual(true);
      })  
  })

  describe('Looper', function() {
      it('looper should exist', function() {
          expect(looper).toEqual(jasmine.any(Function));
      })
      it('Array should be filled with "odd" and "even" instead of numbers', function() {
          var answer = [ [ 'odd', 'even', 'odd', 'even' ], [ 'odd', 'even' ],[ 'odd', 'even', 'odd', 'even', 'odd' ] ]
        var userAnswer = looper();
        var flag = true;
        for (var i = 0; i < answer.length; i++) {
            for(var j = 0; j < answer[i].length; j++) {
                if (answer[i][j] !== userAnswer[i][j]) {
                    flag = false;
                }
            }
        }
        expect(flag).toEqual(true);
        })

  })