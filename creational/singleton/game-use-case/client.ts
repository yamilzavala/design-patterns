import { Game1 } from "./game1";
import { Game2 } from "./game2";
import { Game3 } from "./game3";

const game1 = new Game1(); //Here the first instance for the singleton is created - all the next intances will share the same instance
game1.addWinner(1, 'yamil')

const game2 = new Game2()
game2.addWinner(2, 'josue')

const game3 = new Game3()
game3.addWinner(3, 'paula')

game1.leaderboard.print()
game2.leaderboard.print()
game3.leaderboard.print()

console.log('-----COMPARING THAT ALL INTANCES ARE THE SAME-----')
console.log((game1.leaderboard === game2.leaderboard))
console.log((game2.leaderboard === game3.leaderboard))
