import { Chair } from './chair'

export default class MediumChair extends Chair {
    constructor() {
        super();
        this.name = 'Medium chair';
        this.height = 60;
        this.width = 60;
        this.depth = 60;
    }
}