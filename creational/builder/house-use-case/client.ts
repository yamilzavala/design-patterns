//https://refactoring.guru/es/design-patterns/builder
//https://www.youtube.com/watch?v=JBVK6UnIUDA&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP&index=30&ab_channel=SBCODE
//https://sbcode.net/typescript/builder/

import IglooDirector from './iglu-director'
import HouseBoatDirector from './house-boat-director'
import CastleDirector from './castle.director'
import HouseBuilder from './house-builder'

//Concrete Instances
const IGLOO = IglooDirector.construct()
const CASTLE = CastleDirector.construct()
const BOATHOUSE = HouseBoatDirector.construct()

console.log(IGLOO.display())
console.log(CASTLE.display())
console.log(BOATHOUSE.display())

//Dinamic instancecc
const DINAMICHOUSE = new HouseBuilder()
                    .setBuildingType('Dinamic House')
                    .setWallMaterial('Wood, stones')
                    .setNumberDoors(4)
                    .setNumberWindows(9)
                    .build()