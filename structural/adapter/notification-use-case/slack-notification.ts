export default class SlackNotification {

send(channelId: string, title: string, message: string):void {
        console.log(`Sending #${channelId} ${title} - ${message} to Slack channel`)
    }
}
