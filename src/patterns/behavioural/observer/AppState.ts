import Observable from "./Observable";

export default class AppState extends Observable<AppState> {

    setValue(newValue: string): void {
        this.value = newValue;
        this.notify();
    }

    notify(): void {
        this.observers.forEach(o=>o.update(this));
    }

    value: string;

}