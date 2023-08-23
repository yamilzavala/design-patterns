import IPaymentMethod from "./payment-method-interface";

//Concrete class
export default class Mastercard implements IPaymentMethod {
    get commision(): number {
        return 0.08
    }
}