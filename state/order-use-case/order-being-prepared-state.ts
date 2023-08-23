import {Order, State} from './state'

//Concrete state - BeingPreparedState
export default class OrderBeingPreparedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order
    }

    cancelOrder() {
        console.log('Cancelling your paid order...')
        this.order.setState(this.order.cancelledOrderState)
    }
    verifyPayment() {
        console.log('Already verified your payment...')
    }
    shipOrder() {
        console.log('Shipping your order now...')
        this.order.setState(this.order.orderShippedState)
    }
}