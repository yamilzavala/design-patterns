import IImplementer from "./iimplementer";
import IAbstraction from "./iabstraction";

export class RefinedAbstractionB implements IAbstraction{
    _implementer: IImplementer;

    constructor(implementer: IImplementer) {
        this._implementer = implementer
    }

    method(value: string[]): void {
        this._implementer.concreteMethod(value)
    }
}