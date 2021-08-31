
export default class CSVRowBuilder {

    private row: string = "";

    addColumn(value: string){
        this.row += value + ";";
    }

    getRow(): string {
        return this.row;
    }


}