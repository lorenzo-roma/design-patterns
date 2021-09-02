import AlphabeticallyIterator from "./AlphabeticallyIterator";

export default class WordsCollection {

    private words : string[] = [];

    addWord(word: string): void {
        this.words.push(word);
    }

    getIterator(){
        return new AlphabeticallyIterator(this.words);
    }


}