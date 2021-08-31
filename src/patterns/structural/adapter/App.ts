import Adapter from "./Adapter";
import CSVRowBuilder from "./CSVRowBuilder";
import PrintableArray from "./PrintableArray";
import Printer from "./Printer";

const printableArray: PrintableArray = new PrintableArray();
printableArray.push("1");
printableArray.push("2");
printableArray.push("3");

const csvRowBuilder: CSVRowBuilder = new CSVRowBuilder();
csvRowBuilder.addColumn("1");
csvRowBuilder.addColumn("2");
csvRowBuilder.addColumn("3");

const printer: Printer = new Printer();

printer.print(printableArray);

const adapter: Adapter = new Adapter(csvRowBuilder);
printer.print(adapter);



