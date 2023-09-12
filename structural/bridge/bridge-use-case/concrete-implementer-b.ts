import IImplementer from "./iimplementer";

export default class ConcreteImplementerB implements IImplementer {
    concreteMethod(value: string[]):void {
        value.forEach(v => {
            console.log(v)
        })
    };
}