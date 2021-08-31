import AlertMessage from "../message/AlertMessage";
import HelloMessage from "../abstract/HelloMessage";
import Message from "../abstract/Message";

export default class AlertHelloMessage extends HelloMessage{
    createMessage(): Message {
        return new AlertMessage("Hi, this is an alert message!");
    }
}