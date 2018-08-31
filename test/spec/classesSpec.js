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

      hireTimes(5, emp);
      expect(emp.title).toEqual("Mostly Manager")

      hireTimes(20, emp);
      expect(emp.title).toEqual("Manager")

      hireTimes(50, emp);
      expect(emp.title).toEqual("Manager Plus")

      hireTimes(50, emp);
      expect(emp.title).toEqual("Bestest Manager")
    })
    it('can fire employees for bonuses', function () {
      let emp = new ProgressiveManager("Dallin", "Anderson", "Dallin@DallinDallin.com", 25)
      hireTimes(10, emp);
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


  describe('Machine', function () {
    it('exists', function () {
      expect(new Machine()).not.toBeNull();
    })
    it('sets all properties in the constructor and the report', function () {
      let machine = new Machine();

      expect(machine.widgets_made_count).toEqual(0)
      expect(machine.wear_and_tear_count).toEqual(0)
      expect(machine.needs_reboot).toEqual(false)
    })
    it('can make widgets', function () {
      let machine = new Machine();

      machine.makeWidgets(50)
      expect(machine.widgets_made_count).toEqual(50)
      expect(machine.wear_and_tear_count).toEqual(1)
      expect(machine.needs_reboot).toEqual(false)
    })
    it('updates wear and tear when making widgets', function () {
      let machine = new Machine();

      machine.makeWidgets(50);
      expect(machine.widgets_made_count).toEqual(50)
      expect(machine.wear_and_tear_count).toEqual(1)
      expect(machine.needs_reboot).toEqual(false)

      machine.makeWidgets(500);
      expect(machine.widgets_made_count).toEqual(550)
      expect(machine.wear_and_tear_count).toEqual(11)
      expect(machine.needs_reboot).toEqual(false)
    })
    it('can register fixes', function () {
      let machine = new Machine();

      machine.makeWidgets(5000);
      machine.fixMachine();

      expect(machine.needs_reboot).toBe(true);
    })
    it('can update wear and tear after fixes and reboot', function () {
      let machine = new Machine();
      machine.makeWidgets(5000);
      machine.fixMachine();

      let rebootComplete = machine.reboot();
      // Ensure the values haven't been changed yet.
      expect(machine.wear_and_tear_count).toEqual(100, 'wear_and_tear_count should be 100 until function returned by machine.reboot() is executed.');
      expect(machine.needs_reboot).toBe(true, 'needs_reboot should be true until function returned by machine.reboot() is executed.');
      
      rebootComplete();
      expect(machine.wear_and_tear_count).toEqual(90);
      expect(machine.needs_reboot).toBe(false);
    })
  })
})
