import FornitureFactory from './furniture-factory'

//Chair
let FORNITURE = FornitureFactory.getFurniture('SmallChair')
console.log(FORNITURE?.name)
console.log(FORNITURE?.getDimentions())

//Table
FORNITURE = FornitureFactory.getFurniture('MediumTable')
console.log(FORNITURE?.name)
console.log(FORNITURE?.getDimentions())