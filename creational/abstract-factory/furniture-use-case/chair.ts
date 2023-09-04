import { dimentions } from './dimension'

export interface IChair {
    name: string;
    height: number;
    width: number;
    depth: number;

    getDimentions(): dimentions
}

export class Chair implements IChair {
    name = '';
    height = 0;
    width = 0;
    depth = 0;

    getDimentions(): dimentions {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        }
    }
}