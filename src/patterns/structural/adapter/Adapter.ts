import CSVRowBuilder from "./CSVRowBuilder";
import Printable from "./Printable";


export default class Adapter implements Printable {

    csvRowBuilder: CSVRowBuilder;

    constructor(csvRowBuilder: CSVRowBuilder) {
        this.csvRowBuilder= csvRowBuilder; 
    }

    print(): void {
        this.csvRowBuilder.getRow().split(";").forEach(item=>console.log("Array item value: " + item));
    }

}