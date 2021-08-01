import Message from "../abstract/Message";

export default class AlertMessage extends Message {
    display(): void {
        new alert(this.text);
    }
}