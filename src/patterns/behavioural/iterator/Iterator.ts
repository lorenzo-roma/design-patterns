
export default interface Iterator<T> {

    next(): T;

    previous(): T;

    hasNext(): boolean;

    reset(): void;

}