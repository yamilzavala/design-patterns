import IB from "./ib.interface";

export default class ClassB implements IB {
    methodB(): void {
        console.log('method B called')
    }
}