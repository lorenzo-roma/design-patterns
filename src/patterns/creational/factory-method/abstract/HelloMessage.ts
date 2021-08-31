import Message from "./Message";

export default abstract class HelloMessage{

    private message: Message;

    abstract createMessage(): Message;

    display() : void {
        this.message = this.createMessage();
        this.message.display();
    }
    
}