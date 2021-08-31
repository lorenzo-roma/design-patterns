import Printable from "./Printable";

export default class PrintableArray implements Printable{

    private items: any[];

    push(item){
        this.items.push(item);
    }

    print(): void {
        this.items.forEach(item=>console.log("Array item value: " + item));
    }
}