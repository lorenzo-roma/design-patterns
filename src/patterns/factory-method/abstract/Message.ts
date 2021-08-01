export default abstract class Message{

    protected text: String;

    constructor(text: String){this.text = text;}

    abstract display(): void;
}