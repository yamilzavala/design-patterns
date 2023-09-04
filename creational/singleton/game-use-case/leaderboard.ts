export default class Leaderboard {
    static instance: Leaderboard;
    private table: {[id: number]:string} = {}

    constructor() {
        if(Leaderboard.instance) {
            return Leaderboard.instance
        }
        Leaderboard.instance = this; //this is the first intance when the class is call. All the next intances will share this instance
    }

    addWinner(position: number, name: string) {
        this.table[position] = name;
    }

    print() {
        console.log('-----------Leaderboard-----------')
        for(const key in this.table ) {
            console.log(`|\t${key}\t|\t${this.table[key]}\t|`)
        }
        console.log
    }
}