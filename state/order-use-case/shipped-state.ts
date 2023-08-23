import {Order, State} from './state'

//Concrete state - ShippedState
export default class ShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order
    }

    cancelOrder() {
        console.log('Your cannot cancel, already shipped...')
    }
    verifyPayment() {
        console.log('Your cannot verify payment, already shipped...')
    }
    shipOrder() {
        console.log('Your cannot ship order again, already shipped...')
    }
}