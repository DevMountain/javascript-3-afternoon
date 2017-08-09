  describe('Update Employee Info', function() {

    it('Theo Trill object should be removed', function() {
        var returnedArr = employeeUpdater();
        var flag = true;
        returnedArr.map(function(employee) {
            if (employee.firstName === 'Theo') flag = flase;
        }) 
      expect(employeeUpdater).toEqual(jasmine.any(Function))  
      expect(flag).toEqual(false);
    })

    it('Lorie should be in HR department', function(done) {
        var returnedArr = employeeUpdater();
        var flag = true;
        var lorie = returnedArr.filter(e => e.firstName === 'Lorie')
        expect(lorie[0].department).toEqual('HR')
    })
  })

  describe('Workplace accidents', function() {
      it ('', function() {
          var returnedArr = removeDuplicates().sort(function(num) {
              return a - b;
          });
          expect(returnedArr).toEqual(jasmine.any(Array));
          var answer = [3,7,12,29,44,56];
          var flag = true;
          returnedArr.map( (n,i) => {
              if( n[i] !== answer[i]) flag = false;
          })
          expect(returnedArr.length).toEqual(6);
          expect(removeDuplicates).toEqual(jasmine.any(Function));
          expect(flag).toEqual(true); 
      })
  })

  describe('Fluffy & friends', function() {
      it('feed method should have been invoked', function() {
          spyOn(cat.catFriends[0].actions, 'feed');
          expect(cat.catFriends[0].actions.feed).toHaveBeenCalled();
      })
  })