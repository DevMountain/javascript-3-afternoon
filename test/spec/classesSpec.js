// ========================

describe('Classes', function () {
    describe('Employee', function () {
        it('exists', function () {
            expect(new Employee()).not.toBeNull();
        })
        it('sets all four properties in the constructor', function () {
            let emp = new Employee("Dallin", "Anderson", "Dallin@DallinDallin.com", 25);

            expect(emp.first_name).toEqual("Dallin")
            expect(emp.last_name).toEqual("Anderson")
            expect(emp.email).toEqual("Dallin@DallinDallin.com")
            expect(emp.age).toEqual(25)
        })
        it('can make a widget', function () {
            let emp = new Employee("Dallin", "Anderson", "Dallin@DallinDallin.com", 25)
            let result = emp.makeWidget()

            expect(result).toEqual("Dallin Anderson Widget")
        })
    })

    describe('Manager', function () {
        it('exists', function () {
            expect(new Manager()).not.toBeNull();
        })
        it('sets all four properties in the constructor and the report', function () {
            let emp = new Manager("Dallin", "Anderson", "Dallin@DallinDallin.com", 25);

            expect(emp.first_name).toEqual("Dallin")
            expect(emp.last_name).toEqual("Anderson")
            expect(emp.email).toEqual("Dallin@DallinDallin.com")
            expect(emp.age).toEqual(25)
            expect(emp.reports).not.toBeNull();
            expect(emp.reports.length).toEqual(0)
        })
        it('can hire new employees', function () {
            let emp = new Manager("Dallin", "Anderson", "Dallin@DallinDallin.com", 25)
            emp.hire(new Employee("Ballin", "BAnderson", "Ballin@BallinBallin.com", 22));

            expect(emp.reports.length).toEqual(1)
            expect(emp.reports[0].first_name).toEqual("Ballin")
        })
        it('can fire new employees', function () {
            let emp = new Manager("Dallin", "Anderson", "Dallin@DallinDallin.com", 25)
            emp.hire(new Employee("Ballin0", "BAnderson", "Ballin@BallinBallin.com", 22));
            emp.hire(new Employee("Ballin1", "BAnderson", "Ballin@BallinBallin.com", 22));
            emp.hire(new Employee("Ballin2", "BAnderson", "Ballin@BallinBallin.com", 22));
            emp.fire(1);

            expect(emp.reports.length).toEqual(2)
            expect(emp.reports[0].first_name).toEqual("Ballin0")
            expect(emp.reports[1].first_name).toEqual("Ballin2")
        })
    })

    describe('ProgressiveManager', function () {
        it('exists', function () {
            expect(new ProgressiveManager()).not.toBeNull();
        })
        it('sets all properties in the constructor and title and bonus', function () {
            let emp = new ProgressiveManager("Dallin", "Anderson", "Dallin@DallinDallin.com", 25);

            expect(emp.first_name).toEqual("Dallin")
            expect(emp.last_name).toEqual("Anderson")
            expect(emp.email).toEqual("Dallin@DallinDallin.com")
            expect(emp.age).toEqual(25)
            expect(emp.reports).not.toBeNull();
            expect(emp.reports.length).toEqual(0)
            expect(emp.title).toEqual("Not a manager")
            expect(emp.bonus).toEqual(0)
        })
        it('updates title on hire', function () {
            let emp = new ProgressiveManager("Dallin", "Anderson", "Dallin@DallinDallin.com", 25)
            emp.hire(new Employee("Ballin", "BAnderson", "Ballin@BallinBallin.com", 22));
            expect(emp.title).toEqual("Barely Manager")

            hireTimes(5);
            expect(emp.title).toEqual("Mostly Manager")

            hireTimes(20);
            expect(emp.title).toEqual("Manager")

            hireTimes(50);
            expect(emp.title).toEqual("Manager Plus")

            hireTimes(50);
            expect(emp.title).toEqual("Bestest Plus")
        })
        it('can fire employees for bonuses', function () {
            let emp = new Manager("Dallin", "Anderson", "Dallin@DallinDallin.com", 25)
            emp.hireTimes(10, emp);
            emp.fire(1);
            expect(emp.bonus).toEqual(100)

            emp.fire(1);
            emp.fire(1);
            emp.fire(1);
            expect(emp.bonus).toEqual(400)
        })

        function hireTimes(times, manager) {
            for (var i = 0; i < times; i++) {
                manager.hire(new Employee("Ballin", "BAnderson", "Ballin@BallinBallin.com", 22));
            }
        }
    })

    
    

})