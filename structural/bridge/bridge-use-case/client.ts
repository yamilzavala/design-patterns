import ConcreteImplementerA from "./concrete-implementer-a";
import ConcreteImplementerB from "./concrete-implementer-b";
import { RefinedAbstractionA } from "./refined-abstraction-a";
import { RefinedAbstractionB } from "./refined-abstraction-b";

const values = ['a','b','c']

const concreteImplementerA = new ConcreteImplementerA()
const concreteImplementerB = new ConcreteImplementerB()

const refinedAbstractionA = new RefinedAbstractionA(concreteImplementerA)
const refinedAbstractionB = new RefinedAbstractionB(concreteImplementerB)

refinedAbstractionA.method(values)
refinedAbstractionB.method(values)