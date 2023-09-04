import IA from "./ia.interface"

export default class ClassA implements IA {
    methodA(): void {
        console.log('method A called')
    }
}