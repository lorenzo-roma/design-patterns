import Observer from "./Observer";

export default abstract class Observable<T> {

    observers: Observer<T>[] = [];
    
    addObserver(observer: Observer<T>){
        this.observers.push(observer);
    }

    abstract notify():void;

}