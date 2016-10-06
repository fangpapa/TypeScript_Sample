class BasicCalculator {
    public constructor(protected value: number = 0) { }

    public currentValue(): number {
        return this.value;
    }

    public add(operand: number) {
        this.value += operand;
        return this;
    }

    public subtract(operand: number) {
        this.value -= operand;
        return this;
    }

    public multiply(operand: number) {
        this.value *= operand;
        return this;
    }

    public divide(operand: number) {
        this.value /= operand;
        return this;
    }
}

let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
console.log(v);

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }

    public square() {
        this.value = this.value ** 2;
        return this;
    }

    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}

let v1 = new ScientificCalculator(0.5)
    .square()
    .divide(2)
    .sin()    // Error: 'BasicCalculator' has no 'sin' method.
    .currentValue();
console.log(v1);