// A Singleton Dictionary of Users

import Reports from './reports'
import Wallets from './wallets'

export default class Users {
    static instance: Users
    _users: { [id: string]: { [id: string]: string } } = {}
    _reports = new Reports()
    _wallets = new Wallets()

    constructor() {
        if (Users.instance) {
            return Users.instance
        }
        Users.instance = this
    }

    registerUser(newUser: { [id: string]: string }): string {
        // register a user
        if (!(newUser['user_name'] in this._users)) {
            // generate really complicated unique user_id.
            // Using the existing user_name as the id for simplicity
            const userId = newUser['user_name']
            this._users[userId] = newUser
            this._reports.logEvent(`new user '${userId}' created`)
            // create a wallet for the new user
            this._wallets.createWallet(userId)
            // give the user a sign up bonus
            this._reports.logEvent(
                `Give new user '${userId}' sign up bonus of 10`
            )
            this._wallets.adjustBalance(userId, 10)
            return userId
        }
        return ''
    }

    editUser(userId: string, user: { [id: string]: string }): boolean {
        // do nothing. Not implemented yet
        console.log(userId)
        console.log(user)
        return false
    }

    changePwd(userId: string, password: string): boolean {
        // do nothing. Not implemented yet
        console.log(userId)
        console.log(password)
        return false
    }
}