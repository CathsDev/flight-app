export class Invoice<T> {
    constructor(readonly subject: T, readonly price: number) {
    }

    toString(): string {
        let id = '';
        return `${id}: ${this.price}`;
    }
}
