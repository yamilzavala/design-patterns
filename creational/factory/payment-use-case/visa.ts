import IPaymentMethod from "./payment-method-interface";

//Concrete class
export default class Visa implements IPaymentMethod {
    get commision(): number {
        return 0.05
    }
}