import { IDiscount } from './discount.interface'

export class BasePrice implements IDiscount {
    calculate(input: number): number {
        return input
    }
}