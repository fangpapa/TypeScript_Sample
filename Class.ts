
// Some properties should only be modifiable when an object is first created.
class Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

//------------------------------------------------------------

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

// 多型
let tom: Animal = new Horse("Tommy the Palomino");
tom.move(34);
tom.move();
console.log('tom : ');
console.log(tom);

//------------------------------------------------------------

// Modifiers修飾符
// Public, private, and protected 
// Public by default
// When a member is marked private, it cannot be accessed from outside of its containing class.

class Animal1 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal1 {
    public name1 : string;
    protected name2 : string;
    constructor(name1 : string, name2 : string) {
        super("Rhino");
        this.name1 = name1;
        this.name2 = name2;
    }
}
let rhino :Animal1 = new Rhino('name1','name2');
console.log(rhino);
//console.log(rhino.name);
//console.log(rhino.name1);
//console.log(rhino.name2);

class Rhino1 {
    public name1 : string;
    protected name2 : string;
    constructor(name1 : string, name2 : string) {
        this.name1 = name1;
        this.name2 = name2;
    }
}
let rhino1 :Rhino1 = new Rhino1('name111','name2222');
console.log(rhino1);
console.log('rhino1.name1 : ' + rhino1.name1);
//console.log(rhino1.name2);


class Thing {
  protected doSomething() { /* ... */ }
}

class MyThing extends Thing {
  public myMethod() {
    // OK, can access protected member from subclass
    this.doSomething();
  }
}
var myThing = new MyThing();
// myThing.doSomething(); // Error, cannot call protected member from outside class

//------------------------------------------------------------

class Person {
    protected name: string;
    protected constructor(theName: string) {
        this.name = theName;
    }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log('howard : ');
console.log(howard);
//let john = new Person("John"); // Error: The 'Person' constructor is protected

//------------------------------------------------------------

// Stataic

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
Grid.origin = {x: 1, y: 1};
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//------------------------------------------------------------

// Abstract Classes
abstract class Department {
    constructor(public name: string) {}
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
let department: Department; 
// department = new Department(); //cannot create an instance of an abstract class
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//department.generateReports(); //method doesn't exist on declared abstract type


