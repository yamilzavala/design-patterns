import House from './house'
import HouseBuilder from './house-builder'

export default class BoatDirector {
    static construct(): House {
        return new HouseBuilder()
                .setBuildingType('House Boat')
                .setWallMaterial('Wood')
                .setNumberDoors(6)
                .setNumberWindows(8)
                .build()
    }
}