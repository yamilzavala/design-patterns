//links:
//https://refactoring.guru/es/design-patterns/state
//https://www.youtube.com/watch?v=gMyRtqwxr10&ab_channel=SimplyExplained

import {Order} from './state'

// State Use Case Example Code
const order = new Order()
order.getState().verifyPayment()
order.getState().shipOrder()
order.getState().cancelOrder()
