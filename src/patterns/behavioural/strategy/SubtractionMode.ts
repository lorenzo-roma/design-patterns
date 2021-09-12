import CalculatorMode from "./CalculatorMode";

export default class SubstractMode implements CalculatorMode {

    executeOperation(x: number, y: number): number {
        return x-y;
    }
    


}