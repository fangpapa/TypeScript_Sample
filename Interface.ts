// 第一個範例
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//------------------------------------------------------------

// 將上面改寫
interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label: "Size 20 Object"};
printLabel1(myObj1);

//------------------------------------------------------------

interface SquareConfig {
    color?: string; //?表可選屬性
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquar99 : SquareConfig = {};
mySquar99.color = '111';

let mySquare = createSquare({color: "black"});
console.log('mySquare : ');
console.log(mySquare);
let mySquare0 = createSquare({});
console.log('mySquare0 : ');
console.log(mySquare0);
let mySquare1 = createSquare({color: "red", width : 20});
console.log('mySquare1 : ');
console.log(mySquare1);
// let mySquare1 = createSquare({ colour: "red", width: 100 }); // error colour打錯字
// Argument of type '{ color: string; area: number; }' is not assignable to parameter of type 'SquareConfig'.
// let mySquare1 = createSquare({color: "black", area: 500});

//------------------------------------------------------------

interface SquareConfig1 {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare1(config: SquareConfig1): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.log(config['width1']);
    for(let xxxx in config) {
        console.log('_' + xxxx);
    }
    return newSquare;
}

let mySquare2 = createSquare1({ color: "red", width1: 100, width2: 100 }); // 注意 width1
console.log('mySquare2 : ');
console.log(mySquare2);

//------------------------------------------------------------

// Function Types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}

// 函數名稱不用相符
let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}
console.log('SearchFunc result : ' + mySearch1('abcde','bcd'));

//不寫類型會自動推斷
let mySearch2: SearchFunc;
mySearch2 = function(src, sub) {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}
// console.log(mySearch2('abcde',1));

//------------------------------------------------------------

// Indexable Types
// There are two types of supported index signatures: string and number.
// 返回屬性必須一致
interface StringArray {
    [indexX: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log('myStr : ' + myStr);

let myStr1: string = myArray['1'];
console.log('myStr1 : ' + myStr1);



interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string;
}

interface NumberDictionary1 {
    [index: string]: string;
    // length: number;
    name: string;
}

