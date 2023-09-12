// The Game API facade

import Reports from './reports'
import Wallets from './wallets'
import Users from './user'
import GameEngine, { GameState } from './game-engine'

export default class GameAPI {
    _wallets: Wallets
    _reports: Reports
    _users: Users
    _gameEngine: GameEngine

    constructor() {
        this._wallets = new Wallets()
        this._reports = new Reports()
        this._users = new Users()
        this._gameEngine = new GameEngine()
    }

    getBalance(userId: string): number {
        // Get a players balance
        return this._wallets.getBalance(userId)
    }

    gameState(): GameState {
        // Get the current game state
        return this._gameEngine.getGameState()
    }

    getHistory(): { [id: string]: [number, string] } {
        // get the game history
        return this._reports.getHistory()
    }

    changePwd(userId: string, password: string): boolean {
        // change users password
        return this._users.changePwd(userId, password)
    }

    submitEntry(userId: string, entry: number): boolean {
        // submit a bet
        return this._gameEngine.submitEntry(userId, entry)
    }

    registerUser(value: { [id: string]: string }): string {
        // register a new user and returns the new id
        return this._users.registerUser(value)
    }
}