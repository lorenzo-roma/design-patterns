import AdditionMode from "./AdditionMode";
import Calculator from "./Calculator";
import MultiplyMode from "./MultiplyMode";
import SubstractMode from "./SubtractionMode";

const calculator: Calculator = new Calculator();

const firstOperator = 3;
const secondOperator = 4;
calculator.setMode(new AdditionMode());
console.log(calculator.calculate(firstOperator, secondOperator));
calculator.setMode(new MultiplyMode());
console.log(calculator.calculate(firstOperator, secondOperator));
calculator.setMode(new SubstractMode());
console.log(calculator.calculate(firstOperator, secondOperator));
