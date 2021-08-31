import Message from "../abstract/Message";

export default class ConsoleMessage extends Message {
    display(): void {
        console.log(this.text);
    }
}