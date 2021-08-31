import Printable from "./Printable";

export default class Printer {

    print(item: Printable):void{
        item.print();
    }

}