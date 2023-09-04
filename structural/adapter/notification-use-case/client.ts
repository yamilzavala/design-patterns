import SlackAdapterNotification from "./adapter-slack-notification";
import INotification from "./inotification-interface";
import SlackNotification from "./slack-notification";
import FacebookNotification from './facebook-notification'
import NotificationService from "./notification-service";

const providers: INotification[] = [
    new FacebookNotification(),
    new SlackAdapterNotification(
        new SlackNotification()
    )
]

const notificationService = new NotificationService(providers)
notificationService.post('New course', '25% discount in the first 10 months!')