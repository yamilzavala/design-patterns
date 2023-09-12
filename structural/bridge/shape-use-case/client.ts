import { Circle } from "./circle";
import { CircleImplementer } from "./circle-implementer";
import { Square } from "./square";
import { SqueareImplementer } from "./square-implementer";

const concreteSquare = new SqueareImplementer()
const square = new Square(concreteSquare) 
square.draw()

const concreteCircle = new CircleImplementer()
const circle = new Circle(concreteCircle) 
circle.draw()