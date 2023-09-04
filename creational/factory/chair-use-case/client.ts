//Links
//https://sbcode.net/typescript/factory/
//https://www.youtube.com/watch?v=KtPTG0Q8Fro&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP&index=25&ab_channel=SBCODE

// Factory Use Case Example Code
import ChairFactory from './chair-factory'

const SMALLCHAIR = ChairFactory.getChair('small')
console.log(SMALLCHAIR.getDimensions())

const MEDIUMCHAIR = ChairFactory.getChair('medium')
console.log(MEDIUMCHAIR.getDimensions())

const BIGCHAIR = ChairFactory.getChair('big')
console.log(BIGCHAIR.getDimensions())