import CalculatorMode from "./CalculatorMode";


export default class Calculator {

    currentMode: CalculatorMode;

    setMode(mode: CalculatorMode){
        console.log("Changing mode.");
        this.currentMode = mode;
    }

    calculate(x: number, y: number): number {
        return this.currentMode.executeOperation(x, y);
    }


}