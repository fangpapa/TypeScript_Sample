
class Cat {
    constructor(){
        this.name = 'kitty';
    }
 name: string;
}
class Dog {
    constructor(){
        this.name = 'Dog';
    }
name: string;
}

function isCat(a: any): a is Cat {
    console.log('_____');
  return a.name === 'kitty';
}

var x: Cat | Dog;
x = new Dog();

if(isCat(x)) {
  //x.meow(); // OK, x is Cat in this block
  console.log('1');
} else {
    console.log('2');
}
