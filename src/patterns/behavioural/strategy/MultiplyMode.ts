import CalculatorMode from "./CalculatorMode";

export default class MultiplyMode implements CalculatorMode {

    executeOperation(x: number, y: number): number {
        return x*y;
    }
    


}