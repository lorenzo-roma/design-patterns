export default interface Observer<T> {
    update(value: T): void;
}