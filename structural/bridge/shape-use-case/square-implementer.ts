import IShapeImplementer from "./ishape-implementer";

export class SqueareImplementer implements IShapeImplementer {
    drawImplementation(): void {
        console.log('    ******')
        console.log('  **      **')
        console.log(' *          *')
        console.log('*            *')
        console.log('*            *')
        console.log(' *          *')
        console.log('  **      **')
        console.log('    ******')
    }
}