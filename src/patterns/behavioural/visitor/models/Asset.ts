import Visitor from "./Visitor";

export default abstract class Asset {

    constructor(risk: number){
        this.risk = risk;
    }

    risk: number;

    abstract accept(visitor: Visitor):void;

}