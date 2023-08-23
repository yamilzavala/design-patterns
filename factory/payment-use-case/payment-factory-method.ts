import Mastercard from "./mastercard";
import IPaymentMethod from "./payment-method-interface";
import PaymentType from "./payment-type";
import Paypal from "./paypal";
import Visa from "./visa";

//Factory
export default class PaymentFactoryMethod {
    public static createPaymentType(type: PaymentType): IPaymentMethod {
        if (type === PaymentType.Visa) {
            return new Visa();
        } 
        if (type === PaymentType.Mastercard) {
            return new Mastercard();
        } 
        if (type === PaymentType.Paypal) {
            return new Paypal();
        } 
        throw new Error('Invalid payment method')
    }
}