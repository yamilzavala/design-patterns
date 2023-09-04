import ClassBAdapter from "./adapter"
import ClassA from "./class-a"
import ClassB from "./class-b"


const ITEMS = [new ClassA(), new ClassB()]
ITEMS.forEach(item => {
    if(item instanceof ClassA) {
        item.methodA()
    } else {
        item.methodB()
    }
})

const ADAPTED = [new ClassA(), new ClassBAdapter()]
ADAPTED.forEach(item => {
    item.methodA()
})