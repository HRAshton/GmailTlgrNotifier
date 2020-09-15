function doGet(p: GoogleAppsScript.Events.DoGet) {
    try {
        const mailId = p.parameters["msgId"];
        const message = GmailApp.getMessageById(mailId);

        const template = HtmlService.createTemplateFromFile("EmailViewerTemplate");
        template.data = {
                From: message.getFrom(),
                To: message.getTo(),
                Copy: message.getCc(),
                Subject: message.getSubject(),
                Body: message.getBody(),
            };

        return template.evaluate();
    } catch {
        return ContentService.createTextOutput("Email not found");
    }
}