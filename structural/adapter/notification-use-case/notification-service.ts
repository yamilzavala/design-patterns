import INotification from "./inotification-interface";

export default class NotificationService {
    constructor(private providers: INotification[]) {}

    post(title: string, message: string):void {
        this.providers.forEach(provider => {
            provider.post(title, message)
        })
    }
}