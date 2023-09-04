import { dimentions } from './dimension'

export interface ITable {
    name: string;
    height: number;
    width: number;
    depth: number;

    getDimentions(): dimentions
}

export class Table implements ITable {
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