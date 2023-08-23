import House from './house';

export default class HouseBuilder {
    house: House;

    constructor() {
        this.house = new House()
    }

    setBuildingType(buildingType: string) {
        this.house.buildingType = buildingType;
        return this;
    }
    
    setWallMaterial(wallMaterial: string) {
        this.house.wallMaterial = wallMaterial;
        return this;
    }
    
    setNumberDoors(doors: number) {
        this.house.doors = doors;
        return this;
    }

    setNumberWindows(windows: number) {
        this.house.windows = windows;
        return this;
    }

    build() {
        return this.house
    }
}