describe('Update Employee Info', function() {
    var returnedArr = employeeUpdater();
    it('Theo Trill object should be removed', function() { 
        var flag = true;
        returnedArr.map(function(employee) {
            if (employee.firstName === 'Theo') flag = false;
        }) 
      expect(employeeUpdater).toEqual(jasmine.any(Function))  
      expect(flag).toEqual(true);
    })

    it('Lorie should be in HR department', function() {
        var flag = true;
        var lorie = returnedArr.filter(e => e.firstName === 'Lorie')
        expect(lorie[0].department).toEqual('HR');
    })
  })

  describe('Workplace accidents', function() {
      it ('Should remove all duplicate entries', function() {
          var returnedArr = removeDuplicates().sort(function(a,b) {
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
  })