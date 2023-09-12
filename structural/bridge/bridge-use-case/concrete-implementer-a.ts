import IImplementer from "./iimplementer";

export default class ConcreteImplementerA implements IImplementer {
    concreteMethod(value: string[]):void {
        console.log(value)
    };
}