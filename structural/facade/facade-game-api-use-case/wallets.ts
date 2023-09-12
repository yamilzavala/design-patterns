// A Singleton Dictionary of User Wallets

import Reports from './reports'

export default class Wallets {
    static instance: Wallets
    _wallets: { [id: string]: number } = {}
    _reports = new Reports()

    constructor() {
        if (Wallets.instance) {
            return Wallets.instance
        }
        Wallets.instance = this
    }

    createWallet(userId: string): boolean {
        // A method to initialize a users wallet
        if (!(userId in this._wallets)) {
            this._wallets[userId] = 0
            this._reports.logEvent(
                `wallet for '${userId}' created and set to 0`
            )
            return true
        }
        return false
    }

    getBalance(userId: string): number {
        // A method to check a users balance
        this._reports.logEvent(
            `Balance check for '${userId}' = ${this._wallets[userId]}`
        )
        return this._wallets[userId]
    }

    adjustBalance(userId: string, amount: number): number {
        // A method to adjust a user balance up or down
        this._wallets[userId] = this._wallets[userId] + amount
        this._reports.logEvent(
            `Balance adjustment for '${userId}'. New balance = ${
                this._wallets[userId]
            }`
        )
        return this._wallets[userId]
    }
}