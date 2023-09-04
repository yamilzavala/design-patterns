import {Order, State} from './state'

//Concrete state - PaymentPendingState
export default class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order
    }

    cancelOrder() {
        console.log('Cancelling your paid order...')
        this.order.setState(this.order.cancelledOrderState)
    }
    verifyPayment() {
        console.log('Payment verified soon...')
        this.order.setState(this.order.orderBeingPreparedState)
    }
    shipOrder() {
        console.log('Cannot ship the order when payment is pending...')
    }
}