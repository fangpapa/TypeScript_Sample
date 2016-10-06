interface RunOptions {
   program: string;
   // API for running a program that takes a commandline as either a string, a string[] 
   // or a function that returns a string.
   commandline: string[] | string | (() => string);
}

var opts: RunOptions = {program:'', commandline:''};
if (opts.commandline.length === 0) { // OK, string and string[] both have 'length' property
  console.log("it's empty");
}

opts.commandline = '-hello world'; // OK
opts.commandline = ['-hello', 'world']; // OK
// opts.commandline = [42]; // Error, number is not string or string[]

function formatCommandline(c: string|string[]) {
    if (typeof c === 'string') {
        return c.trim();
    } else {
        return c.join(' ');
    }
}

//------------------------------------------------------------

// Stricter Generics
// 'choose' function where types must match
function choose1<T>(a: T, b: T): T { return Math.random() > 0.5 ? a : b }
// var choose1a = choose1('hello', 42); // Error
var choose1b = choose1<string | number>('hello', 42); // OK

// 'choose' function where types need not match
function choose2<T, U>(a: T, b: U): T | U { return Math.random() > 0.5 ? a : b }
var choose2c = choose2('bar', 'foo'); // OK, c: string
var choose2d = choose2('hello', 42); // OK, d: string|number
