export class Product {
    constructor(public productName: string, public price: number ){}

    setSpecialPrice(amount: number): void {
        this.price = amount
    }
}