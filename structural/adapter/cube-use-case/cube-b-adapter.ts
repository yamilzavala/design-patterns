
// Adapter for CubeB that implements ICubeA
import { ICubeA } from './cube-a'
import CubeB from './cube-b'

export default class CubeBAdapter implements ICubeA {
    _cube: CubeB

    constructor() {
        this._cube = new CubeB()
    }

    manufacture(width: number, height: number, depth: number): boolean {
        const success = this._cube.create(
            [0 - width / 2, 0 - height / 2, 0 - depth / 2],
            [0 + width / 2, 0 + height / 2, 0 + depth / 2]
        )
        return success
    }
}