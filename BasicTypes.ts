/**
 * 這是註解
 * 
 */

// Boolean
let isDone: boolean = false;

//------------------------------------------------------------------

// Number
let decimal: number = 6;
// 十六進位
let hex: number = 0xf00d;
// 二進位
let binary: number = 0b1010;
// 八進位
let octal: number = 0o744;

//------------------------------------------------------------------

// String
let color: string = "blue";
color = 'red';

// 字串樣板 (Template Literals)
let fullName: string = `Bob Bobbington`;
let age: number = 37;

let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`

//------------------------------------------------------------------

// Array
let list: number[] = [1, 2, 3];
// 用泛型來表示一個 Array
let list1: Array<number> = [1, 2, 3];

// ReadonlyArray
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100; // error!
//a = ro; // error!

//------------------------------------------------------------------
let xxxx :[string, number, number] = ['1',2,3];
// Tuple
// tuple可以允許以陣列形式，描述要儲存的類型，會一一檢查每一個位置儲存的值是否符合類型
let t: [string, number];
t = xxxx;
t = ["hello", 10]; // 初始化的時候就會檢查是否含有上述定義
// t = [10, "hello"]; // Error

console.log('substr : ' + t[0].substr(1)); // OK
// console.log(t[1].substr(1)); // Error, 'number' does not have 'substr'

t[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// t[5] = false; // Error, 'boolean' isn't 'string | number'
// console.log(t[5].toString()); // Cannot read property 'toString' of undefined 

let t1: [string, number, boolean];
// t1[0] = 'hello'; // Error, 'boolean' isn't 'string | number'
t1 = ["hello", 10, true]; // 初始化的時候就會檢查是否含有上述定義

//------------------------------------------------------------------

// Enum
enum Color {
    Red, 
    Green, 
    Blue
};
let c: Color = Color.Green;

enum Color2 {
    Red = 1, 
    Green = 2, 
    Blue = 4
};
let c2: Color2 = Color2.Green;
console.log('Color2.Green ordinal : ' + c2);
console.log(Color2[3]);

enum Color3 {
    Red = 1, 
    Green, 
    Blue
};
let colorName: string = Color3[2];
let colorName1: string = Color3[3];
console.log('Color3[2] : ' + colorName + ', Color3[3] : ' + colorName1);

enum Status {
    Good = 111,
    Bad = 222,
    Normal = 333
}
console.log('Status.Good is number : ' + Status.Good);
console.log('Status[2] is string : ' + Status[222]);
console.log('Status["Bad"] is enum : ' + Status["Bad"]);

var goodsStatus: Status = Status["Bad"]; //string 轉 enum
goodsStatus = Status[Status[2]]; //number 轉 enum
var goodsStatusString: string = Status[Status.Good]; // enum值轉 string值
var goodsStatusNumber: number = Status.Good;// enum值轉 number值

//------------------------------------------------------------------

// Any小心使用
// 有時候我們在開發的時候可能還無法決定該變數的型別可以先設為Any
// 翻新舊的code，當不知道物件的類型時可以使用
// toFixed() 方法可把 Number 四舍五入为指定小数位数的数字
let notSure: any = 4;
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let listAny: any[] = [1, true, "free"];
listAny[1] = 100;

//------------------------------------------------------------------

// Void
function warnUser(): void {
    alert("This is my warning message");
    // return true;
}
// Declaring variables of type void is not useful because you can only assign undefined or null to them:
let unusable: void = undefined;

//------------------------------------------------------------------

// Null and Undefined

// Not much else we can assign to these variables!
// let u: undefined = undefined; // 2.0 不會錯
// let n: null = null; // 2.0 不會錯
let u: undefined;
let n: null;

//------------------------------------------------------------------

// Never
// 這個類型的值永遠不會出現，例如一個永遠不會返回的函數，或者一個處於類型保護下的、永遠不會為真的變量
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

//------------------------------------------------------------------

// Type assertions - java的cast
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;

//------------------------------------------------------------------

// Union types
let ut : string | number = 1;
ut = 'test';
