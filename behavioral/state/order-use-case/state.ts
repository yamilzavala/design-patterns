import CancelledOrderState from './cancel-order-state'
import PaymentPendingState from './payment-pending-state'
import ShippedState from './shipped-state'
import OrderBeingPreparedState from './order-being-prepared-state'

//Interface
export interface State {
    //class that handle the different states
    order: Order;

    //posible states
    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void
}

//Context - Base class
export class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;
     
    public currentState: State;

    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this)
        this.paymentPendingState = new PaymentPendingState(this)
        this.orderShippedState = new ShippedState(this)
        this.orderBeingPreparedState = new OrderBeingPreparedState(this)

        //Default state
        this.setState(this.paymentPendingState)
    }

    public setState(state: State) {
        this.currentState = state
    }

    public getState(): State {
        return this.currentState
    }
}