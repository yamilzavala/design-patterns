// https://www.youtube.com/watch?v=QP33nP-KNko&list=PL9prAn3zOWZ4slyDs5y7VOxhb_Sc04ShD&index=3&ab_channel=KODOTI
import Order from './order'
import PaymentType from './payment-type'

const visaOrder = new Order(PaymentType.Visa, 5000)
visaOrder.create()
console.log(visaOrder.commision)

const masterOrder = new Order(PaymentType.Mastercard, 5000)
masterOrder.create()
console.log(masterOrder.commision)

const paypalOrder = new Order(PaymentType.Paypal, 5000)
paypalOrder.create()
console.log(paypalOrder.commision)