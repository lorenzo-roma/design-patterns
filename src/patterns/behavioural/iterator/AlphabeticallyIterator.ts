import Iterator from "./Iterator";

export default class AlphabeticallyIterator implements Iterator<string> {

    private items = [];
    private position: number;

    constructor(items: string[]){
        this.items = items;
        this.items.sort();
        this.reset();
    }

    next(): string {
        return this.items[this.position++];
    }

    previous(): string {
        return this.items[--this.position];
    }
    hasNext(): boolean {
        return this.items[this.position] != null;
    }
    reset(): void {
        this.position = 0;
    }



}