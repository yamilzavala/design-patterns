//links:
//https://refactoring.guru/es/design-patterns/state
//https://www.youtube.com/watch?v=gMyRtqwxr10&ab_channel=SimplyExplained

import {Order} from './state'

// State Use Case Example Code
const order = new Order()
order.getState().shipOrder() //Order - Pending State - Cannot ship the order when payment is pending...
order.getState().verifyPayment() // Order being prepared - Shipping soon
order.getState().cancelOrder()
order.getState().shipOrder();
