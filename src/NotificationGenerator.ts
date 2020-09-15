function createTlgrMessage(msg: GoogleAppsScript.Gmail.GmailMessage): string {
    const messageLines = [
        msg.getFrom(),
        msg.getSubject(),
        `${Settings.ScriptDeployUrl}?msgId=${msg.getId()}`
    ];

    return messageLines.join('\r\n');
}

function sendTlgrMessage(text: string): void {
    UrlFetchApp.fetch('https://api.telegram.org/' + Settings.TlgrBotToken + 
        '/sendMessage?chat_id=' + Settings.ChatId + 
        '&text=' + encodeURIComponent(text));
}

function sendNotifications(): void {
    const unreadMessages = GmailApp.search('is:unread', 0, 50)
        .map(thr => thr.getMessages())
        .reduce((acc, curr) => acc.concat(curr), [])
        .filter(x => x.isUnread());

    const notifications = unreadMessages.map(createTlgrMessage);
    for (const notification of notifications) {
        sendTlgrMessage(notification);
    }

    GmailApp.markMessagesRead(unreadMessages);
}