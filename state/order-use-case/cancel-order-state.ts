import {Order, State} from './state'

//Concrete state - CancelledOrderState
export default class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order
    }

    cancelOrder() {
        console.log('Your order has already been cancelled...')
    }
    verifyPayment() {
        console.log('Order cancelled, you cannot verify payment...')
    }
    shipOrder() {
        console.log('Order cannot ship, it was cancelled...')
    }
}