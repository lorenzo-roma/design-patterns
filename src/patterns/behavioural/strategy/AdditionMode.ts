import CalculatorMode from "./CalculatorMode";

export default class AdditionMode implements CalculatorMode {

    executeOperation(x: number, y: number): number {
        return x+y;
    }
    


}