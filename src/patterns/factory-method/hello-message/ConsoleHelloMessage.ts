import ConsoleMessage from "../message/ConsoleMessage";
import HelloMessage from "../abstract/HelloMessage";
import Message from "../abstract/Message";

export default class ConsoleHelloMessage extends HelloMessage {
    createMessage(): Message {
        return new ConsoleMessage("Hello, this is a console message!");
    }
}