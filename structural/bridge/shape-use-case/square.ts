import { IShape } from "./ishape";
import IShapeImplementer from "./ishape-implementer";

export class Square implements IShape {
    _implementer: IShapeImplementer;

    constructor(implementer: IShapeImplementer) {
        this._implementer = implementer
    }

    draw(): void {
        this._implementer.drawImplementation()
    }
}