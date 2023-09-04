import { Customer } from "./customer";
import { Product } from "./product";
import { BasePrice } from "./base-price";
import { SpecialPriceDecorator } from "./special-price.decorator";
import { VipCustomerDecorator } from "./vip-customer.decorator";

const customer = new Customer('Yamil', true, 'NORMAL')
//const customer = new Customer('Yamil', true, 'VIP')
const product = new Product('Guitar', 2500)

let discount = new BasePrice(); //Base instance

if (customer.isFirstBuy) {
    discount = new SpecialPriceDecorator(discount) //Added new behaviour
}

if (customer.typeCustomer === 'VIP') {
    discount = new VipCustomerDecorator(discount) //Added new behaviour
}

product.setSpecialPrice(discount.calculate(product.price))

console.log(product)



