interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

// currentTime or setTime沒寫會報錯跟java一樣 
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

//------------------------------------------------------------

// Difference between the static and instance sides of classes

// When working with classes and interfaces, 
// it helps to keep in mind that a class has two types: 
// the type of the static side and the type of the instance side. 
// You may notice that if you create an interface with a construct signature 
// and try to create a class that implements this interface you get an error:

interface ClockConstructor {
    new (hour: number, minute: number);
}

// class Clock1 implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }


// This is because when a class implements an interface, 
// only the instance side of the class is checked. 
// Since the constructor sits in the static side, it is not included in this check.

interface ClockConstructor1 {
    new (hour: number, minute: number): ClockInterface1;
}
interface ClockInterface1 {
    tick();
}

function createClock(ctor: ClockConstructor1, hour: number, minute: number): ClockInterface1 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface1 {
    constructor(h: number, m: number) {
        console.log('construct');
    }
    tick() {
        console.log("beep beep");
    }
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick();

//------------------------------------------------------------

// Extending Interfaces
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log('square : ');
console.log(square);

//------------------------------------------------------------
// 混合類型

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number):string {
        console.log(start);
        return '123123';
    };
    counter.interval = 123;
    counter.reset = function () {
        counter.interval = 456;
    };
    return counter;
}
console.log('XXXXX');
let ccc = getCounter();
ccc.interval;
console.log('_' + ccc);
ccc(10);
// ccc('10');
ccc.interval = 5.0;
console.log(ccc);
ccc.reset();
console.log(ccc);

//------------------------------------------------------------

// Interfaces Extending Classes

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

// class SelectableControlImpl implements SelectableControl {
//     state: any;
//     select() { }
// }
