// Compiled using ts2gas 3.6.1 (TypeScript 3.8.3)
function createTlgrMessage(msg) {
    var messageLines = [
        msg.getFrom(),
        msg.getSubject(),
        Settings.ScriptDeployUrl + "?msgId=" + msg.getId()
    ];
    return messageLines.join('\r\n');
}
function sendTlgrMessage(text) {
    UrlFetchApp.fetch('https://api.telegram.org/' + Settings.TlgrBotToken +
        '/sendMessage?chat_id=' + Settings.ChatId +
        '&text=' + encodeURIComponent(text));
}
function sendNotifications() {
    var unreadMessages = GmailApp.search('is:unread', 0, 50)
        .map(function (thr) { return thr.getMessages(); })
        .reduce(function (acc, curr) { return acc.concat(curr); }, [])
        .filter(function (x) { return x.isUnread(); });
    var notifications = unreadMessages.map(createTlgrMessage);
    for (var _i = 0, notifications_1 = notifications; _i < notifications_1.length; _i++) {
        var notification = notifications_1[_i];
        sendTlgrMessage(notification);
    }
    GmailApp.markMessagesRead(unreadMessages);
}
