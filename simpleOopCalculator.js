class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    } 
    
    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }

    static modulus(a, b) {
      return a % b;
    }
}

const calculator = new Calculator();
const add = calculator.add(5, 6);
const subtract = calculator.subtract(5, 6);
const divide = calculator.divide(5, 6);
const multiply = calculator.multiply(5, 6);

const modulus = Calculator.modulus(6, 5);

console.log({add, subtract, divide, multiply, modulus});