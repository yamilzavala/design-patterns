import { IDiscount } from './discount.interface'

export class SpecialPriceDecorator implements IDiscount {
    constructor(private readonly decorator: IDiscount) {}

    private readonly discountAmount = 0.04;

    calculate(input: number): number {
        input = (input * (1 - this.discountAmount))
        return this.decorator.calculate(input)
    }
}