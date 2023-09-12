import SubsystemClassA from "./subsystem-class-a";
import SubsystemClassB from "./subsystem-class-b";
import SubsystemClassC from "./subsystem-class-c";

export default class Facade {
    subSystemClassA():string {
        return new SubsystemClassA().method()
    }
    subSystemClassB(value: string):string {
        return new SubsystemClassB().method(value)
    }
    subSystemClassC(value: {C: number[]}): {C: number[]} {
        return new SubsystemClassC().method(value)
    }
}