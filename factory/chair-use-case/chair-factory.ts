import SmallChair from './small-chair'
import MediumChair from './medium-chair'
import BigChair from './big-chair'
import IChair from './chair'
import {TypeChair} from './chair-type'

//Factory
export default class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == TypeChair.BIG) {
            return new BigChair()
        } else if (chair == TypeChair.MEDIUM) {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }
}