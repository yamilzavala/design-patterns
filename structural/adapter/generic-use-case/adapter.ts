import ClassB from "./class-b";
import IA from "./ia.interface";

export default class ClassBAdapter implements IA {
    _classB: ClassB;

    constructor() {
        this._classB = new ClassB();
    }

    methodA(): void {
        this._classB.methodB()
    }
}