import IPaymentMethod from './payment-method-interface'
import PaymentType from './payment-type'
import PaymentFactoryMethod from './payment-factory-method'

//Base class
export default class Order {
    public paymentType?: IPaymentMethod; 
    public commision: number = 0;

    constructor(private type: PaymentType, public amount: number) {}

    create() {
        //set payment type
        this.paymentType = PaymentFactoryMethod.createPaymentType(this.type)

        //calculate commision
        this.commision = this.amount * this.paymentType.commision;
    }


}