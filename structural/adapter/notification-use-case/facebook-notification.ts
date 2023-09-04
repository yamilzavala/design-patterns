import INotification from './inotification-interface';

export default class FacebookNotification implements INotification {

    post(title: string, message: string):void {
        console.log(`Sending ${title} - ${message} to Facebook`)
    }
}