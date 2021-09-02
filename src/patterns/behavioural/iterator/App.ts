import WordsCollection from "./WordsCollection";

const words = new WordsCollection();

words.addWord("banana");
words.addWord("apple");
words.addWord("orange");
words.addWord("cherry");
words.addWord("mint");
words.addWord("mango");

const iterator = words.getIterator();

while(iterator.hasNext()) console.log(iterator.next());
