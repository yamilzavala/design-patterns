// A Singleton Dictionary of Reported Events

export default class Reports {
    static instance: Reports
    _reports: { [id: string]: [number, string] } = {}
    _rowId = 0

    constructor() {
        if (Reports.instance) {
            return Reports.instance
        }
        Reports.instance = this
    }

    getHistory(): { [id: string]: [number, string] } {
        return this._reports
    }

    logEvent(event: string): boolean {
        this._reports[this._rowId] = [Date.now(), event]
        this._rowId = this._rowId + 1
        return true
    }
}