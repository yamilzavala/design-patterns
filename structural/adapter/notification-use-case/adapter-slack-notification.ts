import INotification from './inotification-interface';
import SlackNotification from './slack-notification';

export default class SlackAdapterNotification implements INotification {

    constructor(private slackNotification: SlackNotification) {}

    post(title: string, message: string):void {
        this.slackNotification.send('general', title, message)
    }
}
