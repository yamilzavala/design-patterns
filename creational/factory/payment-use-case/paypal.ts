import IPaymentMethod from "./payment-method-interface";

//Concrete class
export default class Paypal implements IPaymentMethod {
    get commision(): number {
        return 0.15
    }
}