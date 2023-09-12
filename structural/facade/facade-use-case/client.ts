import Facade from "./facade";
import SubsystemClassA from "./subsystem-class-a";
import SubsystemClassB from "./subsystem-class-b";
import SubsystemClassC from "./subsystem-class-c";

//without facade
const subA = new SubsystemClassA();
const subB = new SubsystemClassB()
const subC = new SubsystemClassC()

console.log(subA.method())
console.log(subB.method('B'))
console.log(subC.method({C: [1,2,3]}))

//with facade
const facade = new Facade()
console.log(facade.subSystemClassA())
console.log(facade.subSystemClassB('B_FACADE'))
console.log(facade.subSystemClassC({C: [1,2,3]}))