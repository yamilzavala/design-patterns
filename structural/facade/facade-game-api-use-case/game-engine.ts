// The Game Engine

import Reports from './reports'
import Wallets from './wallets'

export type GameState = {
    clock: number
    gameOpen: boolean
    entries: [string, number][]
}

export default class GameEngine {
    static instance: GameEngine
    _startTime = 0
    _clock = 0
    _entries: [string, number][] = []
    _gameOpen = true
    _reports = new Reports()
    _wallets = new Wallets()

    constructor() {
        if (GameEngine.instance) {
            return GameEngine.instance
        }
        this._startTime = Math.floor(Date.now() / 1000)
        this._clock = 60
        GameEngine.instance = this
    }

    getGameState(): GameState {
        // Get a snapshot of the current game state
        const now = Math.floor(Date.now() / 1000)
        let timeRemaining = this._startTime - now + this._clock
        console.log('getGameState ' + timeRemaining)
        if (timeRemaining < 0) {
            timeRemaining = 0
        }
        this._gameOpen = false
        return {
            clock: timeRemaining,
            gameOpen: this._gameOpen,
            entries: this._entries,
        } as GameState
    }

    submitEntry(userId: string, entry: number): boolean {
        // Submit a new entry for the user in this game
        const now = Math.floor(Date.now() / 1000)
        const time_remaining = this._startTime - now + this._clock
        if (time_remaining > 0) {
            if (this._wallets.getBalance(userId) > 1) {
                if (this._wallets.adjustBalance(userId, -1)) {
                    this._entries.push([userId, entry])
                    this._reports.logEvent(
                        `New entry '${entry}' submitted by '${userId}'`
                    )
                    return true
                }
                this._reports.logEvent(
                    `Problem adjusting balance for '${userId}'`
                )
                return false
            }
            this._reports.logEvent(`User Balance for '${userId}' to low`)
            return false
        }
        this._reports.logEvent('Game Closed')
        return false
    }
}